import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'

const Login = () => {

    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev=> !prev)

    const errClass = errMsg ? "errmsg" : "offscreen";

    return (
      <div className="authPage">
        <div className="authCard">
          <h1>Login</h1>
          <p ref={errRef} className={errClass} aria-live="assertive">
            {errMsg}
          </p>
          <form className="authForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              className='formInput'
              id="userInput"
              placeholder="Username"
              value={username}
              onChange={handleUserInput}
              ref={userRef}
              autoComplete="off"
              required
            />
            <input
              type="password"
              name="password"
              className='formInput'
              id="passInput"
              placeholder="Password"
              value={password}
              onChange={handlePwdInput}
            />
            <button type="submit">{isLoading ? "Logging..." : "Login"}</button>
            <label htmlFor="persist" className="formPersist">
              <input
                type="checkbox"
                id="persist"
                className="formCheckbox"
                onChange={handleToggle}
                checked={persist}
              />
              Trust This Device
            </label>
          </form>
        </div>
      </div>
    );
}

export default Login;
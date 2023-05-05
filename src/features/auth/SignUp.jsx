
const SignUp = () => {
    return (
      <div className="authPage">
        <div className="authCard">
          <h1>Sign Up</h1>
          <form className="authForm">
            <input
              type="text"
              name="username"
              id="userInput"
              placeholder="Username"
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              id="passInput"
              placeholder="Password"
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassInput"
              placeholder="Confirm Password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
}

export default SignUp
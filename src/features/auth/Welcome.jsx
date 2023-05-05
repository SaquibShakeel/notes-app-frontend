import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {

    const {username, isManager, isAdmin} = useAuth()

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p className='welcomeDate'>{today}</p>

            <h1>Welcome {username}!</h1>

            <p><FontAwesomeIcon icon={faCaretRight} />  <Link to="/dash/notes">View Notes</Link></p>

            <p><FontAwesomeIcon icon={faCaretRight} />  <Link to="/dash/notes/new">Add New Note</Link></p>

            {(isManager || isAdmin) && <p><FontAwesomeIcon icon={faCaretRight} />  <Link to="/dash/users">View User Settings</Link></p>}

            {(isManager || isAdmin) && <p><FontAwesomeIcon icon={faCaretRight} />  <Link to="/dash/users/new">Add New User</Link></p>}

        </section>
    )

    return content
}
export default Welcome
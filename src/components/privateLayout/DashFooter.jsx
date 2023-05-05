import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const DashFooter = () => {

    const {username, status} = useAuth()

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onHomeClick = () => {
        navigate('/dash')
    }

    let goHomeButton = null

    if (pathname !== '/dash') {
        goHomeButton = (
            <button title='Home' onClick={onHomeClick}>
                <FontAwesomeIcon icon={faHome} />
            </button>
        )
    }

    const content = (
        <footer className='dash_footer'>
            {goHomeButton}
            <p>Current User: {username}</p>
            <p>Status: {status}</p>
        </footer>
    )

    return content
}

export default DashFooter
import React from 'react-dom'
import '../styles/Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
function Footer() {
    return (

        <footer className='footer'>
            <p>Created by Nadim Radjab&copy; </p>
            <a href='https://github.com/NadimRadjab'><GitHubIcon /></a>
        </footer>

    )
}
export default Footer
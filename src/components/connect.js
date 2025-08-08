import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './connect.css'
import {
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Connect() {

    const Social = ({icon, link}) => {
        return(
            <a className='social-link' href={link} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon className="social-link-icon" icon={icon} />
            </a>
        )
    }
    return (
        <div className='connect'>
            <h2 className='heading'>Connect with me!</h2>
            <div className='social-stack'>
                <Social icon={faLinkedin} link={'https://www.linkedin.com/in/faysal-mohammed-2076872b0/'} />
                <Social icon={faInstagram} link={'https://www.instagram.com/_.f4ysal.mohd03/'} />
                <Social icon={faGithub} link={'https://github.com/faysalmohd'} />
            </div>
        </div>
    )
}
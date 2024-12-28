import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";
import { Link} from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='container' >
      <div className="footer-wrper">
          <nav id="footer-bar">
            <p>©Todos os direitos reservados.</p>
            <Link  to={'https://www.linkedin.com/in/everton-espedito-3062071a3/'} target="_blank" rel="noopener noreferrer">
              Everton Espedito
            </Link>
        </nav>
        <nav id="social">
            <Link to={"https://github.com/EvertonEspedito"}><FaGithub /></Link>
            <Link to={"https://github.com/EvertonEspedito"}><FaInstagram /></Link>
            <Link to={"https://www.linkedin.com/in/everton-espedito-3062071a3/"}><FaLinkedin /></Link>
        </nav>
      </div>

    </div>
  )
}

export default Footer;

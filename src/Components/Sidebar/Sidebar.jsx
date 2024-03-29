import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import LogoN from '../../assets/images/logo-n.png'
import LogoSubTitle from '../../assets/images/logo_sub-n.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faBriefcase,
  faClose,
  faComment,
  faHome,
  faPerson,
  faPersonDigging,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        onClick={() => setShowNav(false)}
        <img src={LogoN} alt="logo" />
        <img className="sub-logo" src={LogoSubTitle} alt="njoroge" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#c0c4c1" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faPerson} color="#c0c4c1" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faPersonDigging} color="#c0c4c1" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#c0c4c1" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faComment} color="#c0c4c1" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffa900"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/feed/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#c0c4c1" />
          </a>
        </li>
        <li></li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lomuric?tab=repositories"
          >
            <FontAwesomeIcon icon={faGithub} color="#c0c4c1" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffa900"
        size="5x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar

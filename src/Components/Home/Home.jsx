import React, { useEffect, useState } from 'react';
import './Home.scss';
import LogoN from '../../assets/images/1.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Spinner from '../Spinner/Spinner';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['j', 'o', 'r', 'o', 'g', 'e']
  const jobArray = [
    'W',
    'e',
    'b',
    
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.'
  ]

  useEffect(() => {

    setTimeout();
  }, [])

  const setTimeout = () => {
    return(
    setLetterClass('text-animate-hover')
  , 4000)
  }

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>Hello</span>
          <span className={`${letterClass} _12`}> ,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoN} alt="developer" />
          <AnimatedLetters
            letterclass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterclass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>FrontEnd Developer | Network+ Engineer | Security+ </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
     <Spinner className="spinner-container"/>
    </div>
  )
}

export default Home

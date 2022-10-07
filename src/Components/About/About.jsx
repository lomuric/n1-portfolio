import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'
import Heroimg from '../../../src/assets/images/j.jpg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
    setTimeout()
  }, [])

  const setTimeout = () => {
    return( setLetterClass('text-animate-hover'), 4000)
  }
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterclass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '.']}
            idx={15}
          />
        </h1>
        <p>
          As a young man my parents suprised me with a brick game and since then
          life for me was never the same again. As i grew older i got to enjoy
          the game and my love for technology started developing.
        </p>
        <p>
          i am looking for a role in an established IT company and the
          opportunity to work with the latest technologies on challenging and
          diverse projects.
        </p>
        <p>
          I like all aspects of techonology and how it improves our daily lives.
        </p>
      </div>
      <div className="hero__img">
          <img alt="hero__image" src={Heroimg} width="400" height="400" />
      </div>
    </div>
  )
}

export default About

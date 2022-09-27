import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {

    setTimeout();
  }, [])

  const setTimeout = () => {
    return(
    setLetterClass('text-animate-hover')
  , 4000)
  }
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterclass={letterClass}
            strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
            idx={15}
          />
        </h1>
        <p>
          I am an ambitious individual who possesses both hard and soft skills
          that are necessary for the ever changing, dynamic technology industry.
          I'm quiet confident, naturally curious, and perpetually working on
          improving my problem solving skills.
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
    </div>
  )
}

export default About

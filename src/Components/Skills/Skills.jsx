import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Skills.scss'
import CTA from './CTA'
import Services from '../Services/Services'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout()
  }, [])

  const setTimeout = () => {
    return setLetterClass('text-animate-hover')
  }

  return (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterclass={letterClass}
            strArray={'Skills & Experience.'.split('')}
            idx={10}
          />
        </h1>
        <p>
          I use different aspects of technology in order to ensure that the end
          user experience is seamless. I would simply describe it as using the
          best ingridients to get a a fine meal.
        </p>
        <p>
          Through research and continous learning  of new programming languages and
          frameworls. I am able to maintain current projects and also build
          future projects, this will ensure great user experience and maximise
          productivity.
        </p>
        <p>
          Through intergration of different frameworks, various API's and writing clean readble code, i believe that the final product will be well suited for the user.
        </p>
        <CTA />
      </div>
      <div>
        <Services />
      </div>
    </div>
  )
}

export default Skills

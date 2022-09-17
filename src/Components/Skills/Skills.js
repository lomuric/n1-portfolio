import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Skills.scss';
import CTA from './CTA'

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
            strArray={'Skills & Experience'.split('')}
            idx={10}
          />
        </h1>
        <p>
          I am always curious to learn new ways to better my Front end
          development skills. I am comfortable in using techonologies such as
          HTML5, CSS3,Tailwind Css, JavaScript, React.js, Node.js, Bootstrap,
          Git and still learning new technologies to be able to solve problems.
        </p>
        <p>
          I am determined, i put effort in optimizing my code and providing the
          best user experience. I can comfortably work alone and collobarated
          with other team members to ensure committment in all project aspects.
        </p>
        <CTA />
      </div>
    </div>
  )
}

export default Skills
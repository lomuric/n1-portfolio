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
    return setLetterClass('text-animate-hover'), 4000
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
          I am a highly skilled and motivated individual with a strong passion
          for creating intuitive and visually appealing websites, web
          applications and engaging user experiences. I have consistently
          delivered high-quality projects on time and have consistently received
          positive feedback. I am confident in my ability to contribute to your
          team and help drive the success of your projects.
        </p>
        <p>
          I am skilled in responsive web design, I am highly detail-oriented and
          able to work efficiently to meet deadlines and deliver high-quality
          work. I have contributed to the development and maintenance of various
          websites and web applications and have consistently received positive
          feedback for my problem-solving skills and ability to communicate
          effectively with both technical and non-technical team members. I am
          eager to continue learning and growing as a front-end developer and
          excited to bring my skills and expertise to a new team.
        </p>
        <p>
          I am also a strong collaborator, able to work effectively with
          designers, back-end developers, and project managers to bring projects
          to fruition. In addition to my technical skills, I have excellent
          communication and problem-solving abilities, making me a valuable
          asset to any development team.
        </p>
      </div>
      <div className="hero__img">
        <img alt="hero__image" src={Heroimg} width="400" height="400" />
      </div>
    </div>
  )
}

export default About

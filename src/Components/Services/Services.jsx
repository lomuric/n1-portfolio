import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Services.scss'

const Services = () => {
  return (
    <div className="title">
      <span className=''>
        <Typewriter
          loop
          cursor
          cursorStyle="|"
          typeSpeed={40}
          deleteSpeed={60}
          delaySpeed={1000}
          words={[
            'Frontend Developer.',
            'App Development.',
            'Web Development.',
            'Networking',
            'Cyber Security',
          ]}
        />
      </span>
    </div>
  )
}

export default Services

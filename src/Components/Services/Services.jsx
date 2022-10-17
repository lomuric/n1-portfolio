import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Services.scss'

const Services = () => {
  return (
    <div className="title">
      <span className=''>
        <Typewriter
          loop
          cursor="|"
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={60}
          delaySpeed={1000}
          words={[
            'Problem solver.',
            'Execellent communication skills.',
            'Research alot.',
            'Creative.',
            'Detail oriented.',
            'Version Control.',
          ]}
        />
      </span>
    </div>
  )
}

export default Services

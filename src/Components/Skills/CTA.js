import React from 'react';
import './CTA.scss';
import CV from '../../assets/CV.pdf';

const cta = () => {
  return (
    <div className='flatbutton'>
        <a href={CV} download className='flat-button'>Download CV</a>
    </div>
  )
}

export default cta
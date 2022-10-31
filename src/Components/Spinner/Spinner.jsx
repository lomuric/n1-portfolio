import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Spinner.scss'

const Spinner = () => {
  return (
    <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faHtml5} color="#f06529 " />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faCss3} color="#2965f19" />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faGitAlt} color="#171515" />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faAngular} color="#dd1b16 " />
            </div>
        </div>
    </div>
  )
}

export default Spinner
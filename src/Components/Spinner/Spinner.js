import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Spinner.scss'

const Spinner = () => {
  return (
    <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faNodeJs} color="#ec4d28" />
            </div>
        </div>
    </div>
  )
}

export default Spinner
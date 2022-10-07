import React, { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef('')

  useEffect(() => {
    setTimeout()
  }, [])

  const setTimeout = () => {
    return(setLetterClass('text-animate-hover'), 3000)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_p065b7p',
        'template_j0crn3b',
        refForm.current,
        '04Fza1gTO0mVUTZ8w'
      )
      .then(
        () => {
          alert('Message sent successfully')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again')
        }
      )
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '.']}
            idx={15}
          />
        </h1>
        <p>
          I am looking forward to collaborate with any organization and
          individual inorder to help accomplish and deliver projects in expected
          time. Do not hestitate to contact me.
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="info-map">
        <FontAwesomeIcon icon={faMapPin} color="#ffa900" />
        <br />
        Exeter,
        <br />
        Devon, United Kingdom.
        <br />
        <span>lomuricodes@gmail.com</span>
      </div>
    </div>
  )
}

export default Contact

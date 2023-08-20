/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timeoutId); // Clear the timeout on component unmount
        };
      }, [])
      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_rqhugwr',
           'template_fbbz571',
            form.current, 
            'yAecOFYJESg73Amxk')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }


    return (
        <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
                <AnimatedLetters 
                strArray={['c','o','n','t','a','c','t',' ','m','e',]}
                letterClass={letterClass}
                />
                </h1>
                <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, do not hesitate to contact me using below form either.
          </p>

            <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
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
          <div className='info-map'>
           Soumargha Bhattacharjee,
           <br />
           India
           <br />
           Agartala, Tripura(west) <br />
           <span>soumargha17@gmail.com</span>
          </div>
          <div className='map-wrap'>
          <MapContainer center={[23.841863, 91.267941]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[23.841863, 91.267941]}>
              <Popup>Soumargha lives here, come over for a cup of coffee  </Popup>
            </Marker>
          </MapContainer>
          </div>
        </div>
        <Loader type = "pacman"/>
        </>
    )

}


export default Contact;
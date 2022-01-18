import React from 'react'
import { Github, Linkedin } from '@icons-pack/react-simple-icons'
import './Contact.css'

function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className='contact__left'>
                <a className='contact__link' href='https://github.com/Juanhernandezzs'>
                    <Github size={35}/>
                    <p>GitHub</p>
                </a>
                <a className='contact__link' href='https://www.linkedin.com/in/juanhernandez-dev/'>
                    <Linkedin size={35}/>
                    <p>LinkedIn</p>
                </a>
            </div>
            <a className='contact__mail' href='mailto:juanmhdz99@gmail.com'>juanmhdz99@gmail.com</a>
        </div>
    )
}

export default Contact

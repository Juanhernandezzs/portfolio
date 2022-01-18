import React, { useContext } from 'react'
import Contact from '../Contact/Contact'
import './Footer.css'
import text from './text.js'
import { LanguageContext } from '../../LanguageContext'

function Footer() {
    const { Lang } = useContext(LanguageContext);
    const t = text[Lang];

    return (
        <div className='footer'>
            <h2 className='footer__title'>{t.contact}</h2>
            <Contact />
        </div>
    )
}

export default Footer

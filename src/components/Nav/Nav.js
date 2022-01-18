import React, { useContext } from 'react'
import './Nav.css'
import text from './text'
import { LanguageContext } from '../../LanguageContext'

function Nav() {
    const { Lang, setLang } = useContext(LanguageContext);
    const t = text[Lang];
    const newLang = Lang === 'es' ? 'en' : 'es';

    const toggleLang = () => {
        setLang(newLang);
        localStorage.setItem('siteLanguage', newLang);
    };

    return (
        <div className='navbar'>
            <ul>
                <li>
                    <a className='navlink' href='#skills'>{t.skills}</a>
                </li>
                <li>
                    <a className='navlink' href='#portfolio'>{t.portfolio}</a>
                </li>
                <li>
                    <a className='navlink' href='#contact'>{t.contact}</a>
                </li>
                <li>
                    <button onClick={toggleLang}>
                        {t.lang}
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Nav

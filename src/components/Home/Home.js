import React, { useContext } from 'react'
import './Home.css'
import resumeEN from '../../resume/Juan-Hernandez-Resume-EN.pdf'
import resumeES from '../../resume/Juan-Hernandez-Resume-ES.pdf'
import { LanguageContext } from '../../LanguageContext';
import text from './text.js'


function Home() {
    const { Lang } = useContext(LanguageContext);
    const t = text[Lang];
    const currentLang = Lang

    return (
        <div className='intro'>
            <h1 className='home'>Juan Hernández</h1>
            <p className='home__subtitle'>{t.subtitle}</p>
            <a className='downloadbtn' href={currentLang === 'es' ? resumeES : resumeEN}>{t.download}</a>
        </div>
    )
}

export default Home

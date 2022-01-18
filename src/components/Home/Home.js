import React, { useContext } from 'react'
import './Home.css'
import resume from '../../resume/Juan-Hernandez-Resume-EN.pdf'
import { LanguageContext } from '../../LanguageContext';
import text from './text.js'


function Home() {
    const { Lang } = useContext(LanguageContext);
    const t = text[Lang];

    return (
        <div className='intro'>
            <h1 className='home'>Juan Hernández</h1>
            <p className='home__subtitle'>{t.subtitle}</p>
            <a className='downloadbtn' href={resume}>{t.download}</a>
        </div>
    )
}

export default Home

import React, { useContext } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import Amadeus from '../../assets/Amadeus.jpg'
import GameSearch from '../../assets/GameSearch.jpg'
import Coperos from '../../assets/coperos.jpg'
import './Portfolio.css'
import { LanguageContext } from '../../LanguageContext'
import text from './text.js'

function Portfolio() {
    const { Lang } = useContext(LanguageContext);
    const t = text[Lang];

    return (
        <div className='portfolio' id='portfolio'>
            <div className='portfolio__intro'>
                <h2>{t.title}</h2>
                <p>{t.subtitle}</p>
            </div>
            <div className='portfolio__list'>
                <ProjectCard title='Amadeus E-Commerce' desc={t.amadeus.description} linkPage='https://amadeus-e-commerce.vercel.app/' linkRepo='https://github.com/Juanhernandezzs/AmadeuS-E-Commerce' img={Amadeus} />
                <ProjectCard title='GameSearch' desc={t.gameSearch.description} linkPage='https://jh-game-search.herokuapp.com/' linkRepo='https://github.com/Juanhernandezzs/PI-Videogames-FT15a' img={GameSearch} />
                <ProjectCard title='Coperos' desc={t.coperos.description} linkPage='https://coperos.com/' linkRepo='https://github.com/Coperos/coperos' img={Coperos} />
            </div>
        </div>
    )
}

export default Portfolio

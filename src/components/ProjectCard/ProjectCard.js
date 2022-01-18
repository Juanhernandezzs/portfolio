import React, { useContext } from 'react'
import { LanguageContext } from '../../LanguageContext';
import './ProjectCard.css'
import text from './text.js'

function ProjectCard({ title, desc, img, linkRepo, linkPage }) {
    const { Lang } = useContext(LanguageContext);
    const t = text[Lang];

    return (
        <div className='project'>
            <div className='project__img'>
                <img className='project__img-2' src={img} alt='title' />
            </div>
            <div className='project__textcontainer'>
                <h3 className='project__title'>{title}</h3>
                <p className='project__desc'>{desc}</p>
                <div className='project__links'>
                    <a className='downloadbtn' href={linkRepo}>{t.visitRepo}</a>
                    <a className='downloadbtn' href={linkPage}>{t.visitPage}</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

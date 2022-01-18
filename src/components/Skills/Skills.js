import React, { useContext } from 'react'
import './Skills.css'

import {
    Html5,
    CssThree,
    ReactJs,
    Redux,
    Nodedotjs,
    Express,
    Postgresql,
    Javascript,
    Mongodb,
    Materialui
} from '@icons-pack/react-simple-icons';
import SkillCard from '../SkillCard/SkillCard';
import { LanguageContext } from '../../LanguageContext';
import text from './text.js'


function Skills() {
    const { Lang } = useContext(LanguageContext);
    const t = text[Lang];
    return (
        <div id='skills' className='skills'>
            <div className='skillstext'>
                <h2>{t.skills}</h2>
                <p>{t.subtitle}</p>
            </div>
            <div className='skillcontainer'>
                <SkillCard Icon={Html5} text='HTML' />
                <SkillCard Icon={CssThree} text='CSS' />
                <SkillCard Icon={ReactJs} text='React' />
                <SkillCard Icon={Redux} text='Redux' />
                <SkillCard Icon={Javascript} text='JavaScript' />
                <SkillCard Icon={Nodedotjs} text='Node.Js' />
                <SkillCard Icon={Express} text='Express' />
                <SkillCard Icon={Postgresql} text='PostgreSQL' />
                <SkillCard Icon={Mongodb} text='MongoDB' />
                <SkillCard Icon={Materialui} text='MaterialUI' />
            </div>
        </div>
    )
}

export default Skills

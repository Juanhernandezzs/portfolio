import React from 'react'
import './SkillCard.css'

function SkillCard({text, Icon}) {
    return (
        <div className='skillcard'>
            <div>
                <Icon className='cardicon'/>
            </div>
            <p className='cardtext'>{text}</p>
        </div>
    )
}

export default SkillCard

import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
import Skills from '../Skills/Skills'
import './Contents.css'

function Contents() {
    return (
        <div className='contents'>
            <Header />
            <hr></hr>
            <Skills />
            <hr></hr>
            <Portfolio />
            <hr></hr>
            <Footer />
        </div>
    )
}

export default Contents

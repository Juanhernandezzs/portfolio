import React from 'react'
import Home from '../Home/Home'
import Nav from '../Nav/Nav'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <Nav/>
            <Home/>
        </div>
    )
}

export default Header

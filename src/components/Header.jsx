import React from 'react'
import '../scss/Header.scss'
import logo from '../assets/images/logo-bold.png'
/* import helpIcon from '../assets/icons/help-icon.png'
 */
const Header = () => (
    <header className='header'>
        <img className='header__img' src={logo} alt='logo bold'/>
        <div>
            <nav className= 'header__menu'>
                <ul>
                    <li><a href="/">Mi negocio</a></li>
                    <li><a href="/">Ayuda</a></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header

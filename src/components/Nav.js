import React from 'react';
import { useState } from 'react';
import "./Nav.scss";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RedeemIcon from '@mui/icons-material/Redeem';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Nav() {

    // navBar black quand on scroll
    const [navBlack, setNavBlack] = useState(false); // par défaut useState à false car par defaut pas noire
    const [toggleMenu, setToggleMenu] = useState(false);

    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false); //scroll verticalement, si on est au dessus de 100 alors on passe a true sinon false

    };

    useState(() => { // pas d'event on l'applique automatiquement
    document.addEventListener("scroll", transitionNav);
    });

    const handleClick = () => {
        console.log(toggleMenu);
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    };

    //console.log(navBlack);

    /* scroll */


    /* scroll */
  return (
    // literaux de gabarit
    <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav-transparent"} ${toggleMenu && "show"}`}>

        <button className="nav__burger" onClick={handleClick}> <MenuIcon /></button>
        <img src="./images/logo.png" alt="Netflix" className='nav--logo'/>
        <nav className='nav__links'>
        <a href="/" className='nav__link'>Accueil</a>
        <a href="/" className='nav__link'>Séries</a>
        <a href="/" className='nav__link'>Films</a>
        </nav>
        <div className='nav__actions'>
        <a href="/" className='nav__action'>
            <SearchIcon />
        </a>
        <a href="/" className='nav__action'>
            DIRECT
        </a>
        <a href="/" className='nav__action'>
            <RedeemIcon />
        </a>
        <a href="/" className='nav__action'>
            <NotificationsIcon />
        </a>
        <a href="/" className='nav__action'>
            <img src="./images/avatar.png" className="nav--avatar" alt="" />
        </a>
        </div>
    </div>

  );
}

export default Nav;
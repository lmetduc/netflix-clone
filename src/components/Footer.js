import React from 'react';
import "./Footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return <footer className='footer'> 
    <div className='container'>
        <div className='footer__socials'>
            <a href="/" className='footer__link'>
                <FacebookIcon/>
            </a>
            <a href="/" className='footer__link'>
                <InstagramIcon/>
            </a>
            <a href="/" className='footer__link'>
                <TwitterIcon/>
            </a>
            <a href="/" className='footer__link'>
                <YouTubeIcon/>
            </a>
        </div>
        <ul className='footer__links'>
            <li className='footer__link'>
                <a href="/"> Lien footer</a>
            </li>
            <li className='footer__link'>
                <a href="/"> Lien footer</a>
            </li>
            <li className='footer__link'>
                <a href="/"> Lien footer</a>
            </li>
            <li className='footer__link'>
                <a href="/"> Lien footer</a>
            </li>
            <li className='footer__link'>
                <a href="/"> Lien footer</a>
            </li>
            <li className='footer__link'>
                <a href="/"> Lien footer</a>
            </li>
            <li className='footer__link'>
                <a href="/"> Lien footer</a>
            </li>
            <li className='footer__link'>
                <a href="/"> Lien footer</a>
            </li>
        </ul>
        <div className='footer__copy'> Netflix clone - tous droitss réservés</div>
    </div>
    
    </footer>;
    
}

export default Footer;

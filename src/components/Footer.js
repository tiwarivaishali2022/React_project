import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
         <InstagramIcon />
         <WhatsAppIcon />
         <FacebookIcon />
         <LinkedInIcon />
         <TwitterIcon />
      </div>
      <p>&copy; 2023 pizza.com</p>
    </div>
  )
}

export default Footer
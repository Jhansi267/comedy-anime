import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faLinkedinIn, 
  faFacebook, 
  faWhatsapp, 
  faXTwitter 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  let nav = useNavigate();
  
  return (
    <>
      <div className="container-fluid  bg-dark text-white">
        <div className="row pt-5">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <ul style={{listStyle:"none"}}>
              <li className='mb-3 fs-3' style={{
               background: 'linear-gradient(to right, #FFD700, #FFEC8B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>LOL</li>
              <li className='mb-3'>Our LOL OTT platform may cause uncontrollable laughter.</li>
              <li className='mb-3'> Each genre comes with its own special effects from romantic cherry blossoms that actually hit you in the face to battle scenes that make your phone vibrate!.</li>
              <li>Explore anime like never before, genre by genre.</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <ul className="mt-2" style={{listStyle:"none"}}>
              <li className='mb-3 home-ul' onClick={()=>nav('/romanticthemehome')} style={{cursor:'pointer'}}>Home</li>
              <li className='mb-3 home-ul' onClick={()=>nav('/categories')} style={{cursor:'pointer'}}>Movies</li>
              <li className='mb-3 home-ul' onClick={()=>nav('/subscription')} style={{cursor:'pointer'}}>LOL Pass</li>
              <li className='mb-3 home-ul' onClick={()=>nav('/wishlistpage')} style={{cursor:'pointer'}}>WhishList</li>
              <li className='mb-3 home-ul' onClick={()=>nav('/wishlistpage')} style={{cursor:'pointer'}}>Ranking</li>
              <li className='home-ul' onClick={()=>nav('/profilepage')} style={{cursor:'pointer'}}>Profile</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <ul className='mt-2' style={{listStyle:"none"}}>
              <li className='mb-3 text-info'>Stay connected with us:</li>
              <li className='mb-3 home-ul' onClick={() => window.location.href = 'https://www.instagram.com/?hl=en'} style={{cursor:'pointer'}}>
                <FontAwesomeIcon icon={faInstagram} className="me-2" style={{color:"#E1306C"}} />
                Instagram
              </li>
              <li className='mb-3 home-ul' onClick={() => window.location.href = 'https://in.linkedin.com/'} style={{cursor:'pointer'}}>
                <FontAwesomeIcon icon={faLinkedinIn} className="me-2" style={{color:"#0077B5"}} />
                LinkedIn
              </li>
              <li className='mb-3 home-ul' onClick={() => window.location.href = 'https://www.facebook.com/'} style={{cursor:'pointer'}}>
                <FontAwesomeIcon icon={faFacebook} className="me-2" style={{color:"#1877F2"}} />
                Facebook
              </li>
              <li className='mb-3 home-ul' onClick={() => window.location.href = 'https://web.whatsapp.com/'} style={{cursor:'pointer'}}>
                <FontAwesomeIcon icon={faWhatsapp} className="me-2" style={{color:"#25D366"}} />
                WhatsApp
              </li>
              <li className='home-ul' onClick={() => window.location.href = 'https://x.com/?lang=en'} style={{cursor:'pointer'}}>
                <FontAwesomeIcon icon={faXTwitter} className="me-2" style={{color:"#1DA1F2"}} />
                Twitter
              </li>
            </ul>
          </div>
        </div>  
      </div>
    </>
  );
};
export default Footer;
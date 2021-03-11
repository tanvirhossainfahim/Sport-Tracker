import React from 'react';
import './social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons' 



function Social(props){

  const {facebook, youtube, twitter, instagram} = props.data;


  return(
    <div className="social">
      <ul>
        <li> <a target="_blank" href={'https://'+facebook}><FontAwesomeIcon icon={faFacebookF} /> </a></li>
        <li> <a href={'https://'+twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} /> </a></li>
        <li> <a target="_blank" href={'https://'+youtube}><FontAwesomeIcon icon={faYoutube} /> </a></li>
        <li> <a href={'https://'+instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} /> </a></li>
      </ul>
    </div>
  );
  
}


export default Social;
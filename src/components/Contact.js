import React from 'react'
import "./styles.css";
import "./footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
function Contact() {
    return (
        <div id="blog-hero">
            
            <div className="contact">
            <h1>Contact Us</h1>
            <p>
                Need a Hand ? or a High Five?
                <br></br>
               Here is how to reach us
                <br></br>
                Every peice of suggestion is precious for us
            </p> 
            <div className="social-icons">
                <a href="#"><FacebookIcon fontSize="large"/></a>
  	 				<a href="#"><LinkedInIcon fontSize="large"/></a>
  	 				<a href="#"><GitHubIcon fontSize="large"/></a>
  	 				<a href="#"><InstagramIcon fontSize="large"/></a>
                       </div>
            </div>
           
  	 		
  	 			
  	 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ee5e9a" fill-opacity="1" d="M0,32L480,192L960,160L1440,320L1440,0L960,0L480,0L0,0Z"></path></svg>
        </div>
    )
}

export default Contact

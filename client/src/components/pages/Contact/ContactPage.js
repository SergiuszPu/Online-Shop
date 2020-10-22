import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Contact.scss';

const ContactPage = () => (
  <Container className="contact">
    <PageTitle>Contact</PageTitle>
    <div className="contact-wrapper">
      <p><b>OnlineShop</b></p>
      <p><i>927210 Tu</i></p>
      <p>Lorem Ipsum</p>
      <p>E-mail: <FontAwesomeIcon icon={faEnvelope} /> office@onlineshop.com</p>
      <p>Mobile Number: <FontAwesomeIcon icon={faMobileAlt} /> 666-666--66</p>
      <div className="social-media">
        <a href="facebook.com"><FontAwesomeIcon icon={faFacebookSquare} /></a>
        <a href="instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="tweeter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
  </Container>
);

export default ContactPage; 
import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import '../Faq/FaqPage.scss'

const FaqPage = () => (
  <Container>
    <PageTitle>FAQ</PageTitle>
    <div className="storepolicy-wrapper">
      <p>Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
      <p>A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
      lobortis elementum nibh tellus molestie nunc. Amet venenatis urna cursus
      eget nunc scelerisque viverra. Odio euismod lacinia at quis risus.
			</p>
      <p>Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
      lobortis elementum nibh tellus molestie nunc.
			</p>
      <p>A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
      lobortis elementum nibh tellus molestie nunc. Amet venenatis urna cursus
      eget nunc scelerisque viverra. Odio euismod lacinia at quis risus.
			</p>
    </div>
  </Container>
);

export default FaqPage; 
import React from 'react';
import NavBar from '../../features/NavBar/NavBarContainer';
import PageContainer from '../PageContainer/PageContainer';
import Footer from '../../features/Footer/Footer';

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>
      <NavBar />
      {children}
      <Footer />
    </PageContainer>
  </div>

);

export default MainLayout; 
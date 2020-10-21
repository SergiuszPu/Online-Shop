import React from 'react';
import NavBar from '../../features/NavBar/NavBarContainer';
import PageContainer from '../PageContainer/PageContainer';
import Footer from '../../features/Footer/Footer';

const MainLayout = ({ children }) => (
  <PageContainer>
    <NavBar />
    {children}
    <Footer />
  </PageContainer>
);

export default MainLayout; 
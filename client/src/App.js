import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';
import Faq from './components/pages/Faq/FaqPage';
import StorePolicy from './components/pages/StorePolicy/StorePolicy';
import Contact from './components/pages/Contact/ContactPage';
import Cart from './components/pages/Cart/CartPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import SingleProduct from './components/features/SingleProduct/SingleProductPage';
import SummaryPage from './components/pages/Summary/SummaryPage';



class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/storepolicy" component={StorePolicy} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/summary" component={SummaryPage} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
}
export default App;
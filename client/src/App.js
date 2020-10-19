import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';
import Faq from './components/pages/Faq/FaqPage';
import StorePolicy from './components/pages/StorePolicy/StorePolicy';
import Contact from './components/pages/Contact/ContactPage';
import Cart from './components/pages/Cart/CartPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Product from './components/pages/Product/ProductPage';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/faq' exact component={Faq} />
          <Route path='/storepolicy' exact component={StorePolicy} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/cart' exact component={Cart} />
          <Route path="/product" exact component={Product} />
          <Route path='/notfound' exact component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
}
export default App;
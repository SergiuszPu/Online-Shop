import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </MainLayout>
    );
  }
}
export default App;
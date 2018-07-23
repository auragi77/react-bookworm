import React from 'react';
import {Route} from 'react-router-dom';
import HelloPage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

const App =() => 
  <div>
    <Route path ="/" exact component={HelloPage} />
    <Route path ="/login" exact component={LoginPage} />
  </div>;

export default App;

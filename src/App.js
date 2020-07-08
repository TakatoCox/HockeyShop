import React from 'react';
import './App.css';
//import { Provider } from 'react-redux';
import Header from './components/navbar/headBar.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import SticksContainer from './components/sticks/sticksPage';
import SkatesContainer from './components/skates/skatesPage';
import HelmetsContainer from './components/helmets/helmetsPage';
import UndergearContainer from './components/undergear/undergearPage';
import PaddingContainer from './components/padding/paddingPage';
import Home from './components/home/home';
import CartPage from './components/cart/cart';
import Checkout from './components/checkout/checkout';


function App() {
  return (
  <Provider store={store}>  
    <Router>
      <div className="App">
          <Header/>
          <Route path="/cart" exact component={CartPage}/>
          <Route path="/HockeyShop/" exact component={Home}/>
          <Route path="/sticks" exact component={SticksContainer}/>
          <Route path="/skates" exact component={SkatesContainer}/>
          <Route path="/helmets" exact component={HelmetsContainer}/>
          <Route path="/undergear" exact component={UndergearContainer}/>
          <Route path="/padding" exact component={PaddingContainer}/>
          <Route path="/checkout" exact component={Checkout}/>
      </div>
    </Router>
  </Provider>
  );
}

export default App;

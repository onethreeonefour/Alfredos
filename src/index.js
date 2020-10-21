import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/Navigation/Navigation.css';
import LandingPage from './Components/Landing/LandingPage';
import NavBar from './Components/Navigation/Navbar';
import Footer from './Components/Navigation/Footer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <LandingPage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

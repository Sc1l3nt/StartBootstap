import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/body/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Body/>
    <Footer/>
  </>
);

import React from 'react';
import './App.css';
import Header from './Page/Header';
import Footer from './Page/Footer';
import MenuMakanan from './Page/MenuMakanan';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';

function App() {
  return (
    <div>
    <center>
    <Header/>
    <MenuMakanan/>
    <MenuKontak/>
    <MenuTentangKami/>
    <Footer/>
    </center>
    </div>
  );
}

export default App;

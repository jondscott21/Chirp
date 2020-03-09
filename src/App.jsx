import React from 'react';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import Suggestions from './components/Suggestions'
import { AppWrapper } from './styles/AppStyles'

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <Home />
      <Suggestions />
    </AppWrapper>
  );
}

export default App;

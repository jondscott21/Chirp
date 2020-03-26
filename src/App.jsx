import React from 'react';
import './App.css';
import Home from './components/Home'
import SideNavBar from './components/SideNavBar'
import TopNavBar from './components/TopNavBar'
import Suggestions from './components/Suggestions'
import { AppWrapper } from './styles/AppStyles'

function App() {
  return (
    <AppWrapper>
      <TopNavBar />
      <SideNavBar />
      <Home />
      <Suggestions />
    </AppWrapper>
  );
}

export default App;

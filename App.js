import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from './components/Header'
import Battleship from './components/Battleship';
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <StatusBar style="auto" />
      <Battleship />
      <Footer />
    </>
  );
}



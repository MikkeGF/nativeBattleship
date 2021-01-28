import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from './components/Header'
import Board from './components/Board';
import Footer from './components/Footer'

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <StatusBar style="auto" />
      <Board />
      <Footer />
    </React.Fragment>
  );
}



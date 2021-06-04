import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { GlobalStyle } from './GlobalStyle';

export default function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
    </div>
  );
}

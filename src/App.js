import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { GlobalStyle } from './GlobalStyle';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* gameId can be anything; i.e., gameName */}
        <Route path="/:gameId" element={<Game />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

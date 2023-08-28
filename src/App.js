import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greetings from './components/greetings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
}

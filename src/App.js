import React from 'react';
import Form from './Form';
import Record from './Record';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/record" element={<Record />} />
        <Route path="/" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;

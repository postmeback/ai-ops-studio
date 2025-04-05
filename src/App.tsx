import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/NavBar';
import HomePage from './features/home/homepage';
import DeploymentsPage from './features/deployments/deployments';
import Workflows from './features/workflow/workflow';
import Settings from './features/settings/settings';
import Docs from './features/docs/docs';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deployments" element={<DeploymentsPage />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

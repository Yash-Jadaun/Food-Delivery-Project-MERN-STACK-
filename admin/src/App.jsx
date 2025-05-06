import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-layout" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="main-content" style={{ marginLeft: '18%', flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

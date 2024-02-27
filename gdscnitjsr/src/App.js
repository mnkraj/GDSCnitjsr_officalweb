import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


import Home from './Components/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import EventsPage from './pages/Events';
import { Addmembers } from './pages/Addmembers';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
           <Route exact path="/" element={<Home />} />
          <Route exact path="/addevents" element={<EventsPage />} />
          <Route exact path="/addmember" element={<Addmembers />} />
        </Routes>
      </Router>
       
    </>
  );
}

export default App;

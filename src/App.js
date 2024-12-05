import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './features/Pages/Home';
import Add_user from './features/Pages/Add_user';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Home/></>}></Route>
          <Route path="/add_user" element={<><Add_user/></>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

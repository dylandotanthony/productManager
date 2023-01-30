import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
function App() {
  return (
    <div style={{ margin: "50px" }}>
      <BrowserRouter>
            <Routes>
	            <Route element={<Main/>} path="/home" default /> 
              <Route element={<Detail/>} path="/product/:id" />
            </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
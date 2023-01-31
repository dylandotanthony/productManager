import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
function App() {
  return (
      <BrowserRouter>
        <div style={{ margin: "50px" }}>
            <Routes>
	            <Route element={<Main/>} path="/" default /> 
              <Route element={<Detail/>} path="/product/:id" />
              <Route element={<Update/>} path="/product/edit/:id"/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;
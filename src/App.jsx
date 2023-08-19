/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss';
import Home from './components/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element = {<Home/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

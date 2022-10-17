import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useSelector} from "react-redux";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import { RootState } from "./apps/store";


function App() {

  const authen=useSelector((state:RootState)=>state.authen);

  return (

    <BrowserRouter>
      <h1>สวัสดี : {authen.username}</h1>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Home" element={<HomePage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

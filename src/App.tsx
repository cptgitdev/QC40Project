import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useSelector} from "react-redux";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import  { RootReducer } from "./reducers"
function App() {

  const loginReducer=useSelector((state:RootReducer)=>state.loginReducer);

  return (

    <BrowserRouter>
        <h1>{loginReducer.result?.token}</h1>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

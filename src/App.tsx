import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

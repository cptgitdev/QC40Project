import * as React from "react";
import DecrementBtn from "../../componentitems/counter/DecrementBtn";
import IncrementBtn from "../../componentitems/counter/IncrementBtn";
import {useDispatch, useSelector} from "react-redux";
import { clear, counterSelector } from "../../../slices/Counter/counterSlice";
import { Button } from "@mui/material";
import {authenSelector, logout} from "../../../slices/Authen/authenSlice";
import { useNavigate } from "react-router-dom";



const HomePage: React.FC<any> = () => {

  const counter=useSelector(counterSelector);
  const {isLogin}=useSelector(authenSelector);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const signOut=()=>{
    dispatch(logout());
    dispatch(clear());
    navigate('/login');
  }


  React.useEffect(()=>{
    if(!isLogin) navigate('/login');
  },[isLogin]);

  return (
    <>
      <h1>Value : {counter.value}</h1>
      <br/>
      <IncrementBtn />
      <br /> 
      <DecrementBtn />
      <br/>
      <Button variant="contained" onClick={signOut}>Sign Out</Button>

    </>
  );
};

export default HomePage;

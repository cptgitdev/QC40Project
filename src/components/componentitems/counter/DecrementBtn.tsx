import Button from "@mui/material/Button";
import React from "react";
import {useDispatch} from "react-redux";
import {decrement} from "../../../slices/Counter/counterSlice";

type Props = {}

export default function DecrementBtn({}: Props) {

    const dispatch=useDispatch();
    const decrementNumber=()=>{
        dispatch(decrement());
    }
  return (
    <div>
        <Button variant="contained" onClick={decrementNumber}>Decrement (-)</Button>
    </div>
  )
}
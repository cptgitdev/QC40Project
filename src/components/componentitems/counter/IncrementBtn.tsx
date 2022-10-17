import { Button } from "@mui/material";
import React from "react";
import {useDispatch} from "react-redux";
import {increments} from "../../../slices/Counter/counterSlice";

type Props = {};

export default function IncrementBtn({}: Props) {
  const dispatch = useDispatch();
  const incrementNumber = () => {
    dispatch(increments());
  };
  return (
    <div>
      <Button variant="contained" onClick={incrementNumber}>Increment (+)</Button>
    </div>
  );
}

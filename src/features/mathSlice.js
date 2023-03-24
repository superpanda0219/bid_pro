import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    numberOne: 2,
    operator: "+",
    numberTwo: 2,
    answer: 4
  },
  {
    numberOne: 2,
    operator: "-",
    numberTwo: 2,
    answer: 0
  },
  {
    numberOne: 2,
    operator: "*",
    numberTwo: 2,
    answer: 4
  },
  {
    numberOne: 2,
    operator: "/",
    numberTwo: 2,
    answer: 1
  },
  {
    numberOne: 2,
    operator: "%",
    numberTwo: 2,
    answer: 0
  },
];

export const mathSlice = createSlice({
  name: 'math',
  initialState,
  reducers: {
    addMath: (state, action) => {
      return [
        ...state,
        action.payload
      ]
    }
  }
})

export const { addMath }  = mathSlice.actions;

export default mathSlice.reducer;
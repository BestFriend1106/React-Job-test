import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  value: [],
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems: (state, data) => {
      state.value = data;
    },
  },
});

export const getItems = () => async (dispatch) => {
  axios
    .get(
      "https://3f8hd6whlf.execute-api.eu-west-1.amazonaws.com/prod/items"
    )
    .then((data) => {
      dispatch(setItems(data.data));
    });
};

export const { setItems } = itemSlice.actions;

export const selectItems = (state) => state.item.value;

export default itemSlice.reducer;

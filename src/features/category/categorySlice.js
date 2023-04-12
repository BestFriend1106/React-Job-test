import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  value: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, data) => {
      state.value = data;
    },
  },
});

export const getCategories = () => async (dispatch) => {
  axios
    .get(
      "https://3f8hd6whlf.execute-api.eu-west-1.amazonaws.com/prod/categories"
    )
    .then((data) => {
      dispatch(setCategories(data.data));
    });
};

export const { setCategories } = categorySlice.actions;

export const selectCategories = (state) => state.category.value;

export default categorySlice.reducer;

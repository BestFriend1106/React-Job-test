import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  value: [],
};

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    setTags: (state, data) => {
      state.value = data;
    },
  },
});

export const getTags = () => async (dispatch) => {
  axios
    .get("https://3f8hd6whlf.execute-api.eu-west-1.amazonaws.com/prod/tags")
    .then((data) => {
      dispatch(setTags(data.data));
    });
};

export const { setTags } = tagSlice.actions;

export const selectTags = (state) => state.tag.value;

export default tagSlice.reducer;

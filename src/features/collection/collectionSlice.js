import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  value: [],
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setCollections: (state, data) => {
      state.value = data;
    },
  },
});

export const getCollections = () => async (dispatch) => {
  axios
    .get(
      "https://3f8hd6whlf.execute-api.eu-west-1.amazonaws.com/prod/collections"
    )
    .then((data) => {
      dispatch(setCollections(data.data));
    });
};

export const { setCollections } = collectionSlice.actions;

export const selectCollections = (state) => state.collection.value;

export default collectionSlice.reducer;

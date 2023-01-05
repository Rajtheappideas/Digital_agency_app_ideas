import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postbaseurl } from "../BaseUrl";

export const handlePostProjectReview = createAsyncThunk(
  "features/handlePostProjectReview",
  async ({ fname, lname, email, comment, projectId, rating }) => {
    const response = await postbaseurl("review", {
      data: {
        fname: fname,
        lname: lname,
        email: email,
        comment: comment,
        rating: rating,
        project: projectId,
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    return response;
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const FeatureSlice = createSlice({
  name: "features",
  initialState,
  reducers: {},
  extraReducers: {
    // handle post project review
    [handlePostProjectReview.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [handlePostProjectReview.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    [handlePostProjectReview.pending]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
  },
});

export const {} = FeatureSlice.actions;

export default FeatureSlice.reducer;

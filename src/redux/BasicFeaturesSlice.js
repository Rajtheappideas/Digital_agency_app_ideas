import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postbaseurl } from "../BaseUrl";

export const handleContactUsSubmit = createAsyncThunk(
  "basicFeatures/handleContactUsSubmit",
  async ({ name, message, subject, phone, email }) => {
    const response = await postbaseurl("contact", {
      data: {
        name,
        email,
        subject,
        phone,
        message,
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

const BasicFeaturesSlice = createSlice({
  name: "basicFeatures",
  initialState,
  reducers: {},
  extraReducers: {
    // handle contact us form
    [handleContactUsSubmit.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [handleContactUsSubmit.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    [handleContactUsSubmit.pending]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
  },
});

export const {} = BasicFeaturesSlice.actions;

export default BasicFeaturesSlice.reducer;

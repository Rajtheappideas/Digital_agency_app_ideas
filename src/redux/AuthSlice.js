import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { postbaseurl } from "../BaseUrl";

export const handleSignup = createAsyncThunk(
  "auth/handleSignup",
  async ({ name, password, email }) => {
    toast.dismiss();
    const response = await postbaseurl("signup", {
      data: {
        name: name,
        email: email,
        password: password,
      },
    })
      .then((res) => {
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        window.localStorage.setItem("token", JSON.stringify(res.data.token));
        return res.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        return err.response.data;
      });
    return response;
  }
);

export const handleSignin = createAsyncThunk(
  "auth/handleSignin",
  async ({ password, email }) => {
    toast.dismiss();
    const response = await postbaseurl("signin", {
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        window.localStorage.setItem("token", JSON.stringify(res.data.token));
        return res.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        return err.response.data;
      });
    return response;
  }
);

export const handleForgotPassword = createAsyncThunk(
  "auth/handleForgotPassword",
  async ({ email }) => {
    toast.dismiss();
    const response = await postbaseurl("forgot-password", {
      data: {
        email: email,
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        return err.response.data;
      });
    return response;
  }
);

export const handleResetPassword = createAsyncThunk(
  "auth/handleResetPassword",
  async ({ password, email, otp }) => {
    toast.dismiss();
    const response = await postbaseurl("reset-password", {
      data: {
        email: email,
        password: password,
        otp: otp,
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        return err.response.data;
      });
    return response;
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  user: window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : null,
  token: window.localStorage.getItem("token")
    ? JSON.parse(window.localStorage.getItem("token"))
    : "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogout: (state) => {
      window.localStorage.clear();
      window.location.reload();
      state.user = null;
      state.token = "";
      state.loading = true;
    },
  },
  extraReducers: {
    // handle signup
    [handleSignup.pending]: (state, { payload }) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.user = null;
      state.token = "";
    },
    [handleSignup.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.user = payload.user;
      state.token = payload.token;
    },
    [handleSignup.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      state.user = null;
      state.token = "";
    },

    // handle signin
    [handleSignin.pending]: (state, { payload }) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.user = null;
      state.token = "";
    },
    [handleSignin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.user = payload.user;
      state.token = payload.token;
    },
    [handleSignin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      state.user = null;
      state.token = "";
    },
    // handle forgot password
    [handleForgotPassword.pending]: (state, { payload }) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.user = null;
      state.token = "";
    },
    [handleForgotPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.user = null;
      state.token = "";
    },
    [handleForgotPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      state.user = null;
      state.token = "";
    },
    // handle reset password
    [handleResetPassword.pending]: (state, { payload }) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.user = null;
      state.token = "";
    },
    [handleResetPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.user = null;
      state.token = "";
    },
    [handleResetPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      state.user = null;
      state.token = "";
    },
  },
});

export const { handleLogout } = AuthSlice.actions;

export default AuthSlice.reducer;

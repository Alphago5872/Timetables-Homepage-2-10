import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: {
    firstName: "",
    lastName: "",
    profile: "",
    email: "",
    role: "",
  },
  permission: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;

      state.userData.firstName = action.payload.firstName;
      state.userData.lastName = action.payload.lastName;
      state.userData.profile = action.payload.profile;
      state.userData.email = action.payload.email;
      state.userData.role = action.payload.type;
      state.userData.year = 10;

      switch (action.payload.type) {
        case "student":
          state.permission = 0;
          break;
        case "supervisor":
          state.permission = 1;
          break;
        case "care":
          state.permission = 2;
          break;
        case "headSup":
          state.permission = 3;
          break;
        case "developer":
          state.permission = 4;
          break;
        default:
          state.permission = 0;
          break;
      }
    },

    signout: (state) => {
      state.isLoggedIn = false;
      state.userData = initialState.userData;
    },
  },
});

export const authAcctions = authSlice.actions;
export default authSlice;

import { configureStore } from "@reduxjs/toolkit";
import BasicFeaturesSlice from "./BasicFeaturesSlice";
import ContentSlice from "./ContentSlice";

const store = configureStore({
  reducer: { basicFeatures: BasicFeaturesSlice, content: ContentSlice },
});

export default store;

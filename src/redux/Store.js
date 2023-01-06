import { configureStore } from "@reduxjs/toolkit";
import BasicFeaturesSlice from "./BasicFeaturesSlice";
import ContentSlice from "./ContentSlice";
import FeatureSlice from "./FeatureSlice";
import AuthSlice from "./AuthSlice";

const store = configureStore({
  reducer: {
    basicFeatures: BasicFeaturesSlice,
    content: ContentSlice,
    features: FeatureSlice,
    user: AuthSlice,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import BasicFeaturesSlice from "./BasicFeaturesSlice";
import ContentSlice from "./ContentSlice";
import FeatureSlice from "./FeatureSlice";

const store = configureStore({
  reducer: {
    basicFeatures: BasicFeaturesSlice,
    content: ContentSlice,
    features: FeatureSlice,
  },
});

export default store;

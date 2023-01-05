import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// css file import
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/animate.css";
import "./assets/css/animation.css";
import "./assets/css/bootstrap.css";
import "./assets/css/color.css";
import "./assets/css/custom-animate.css";
import "./assets/css/flaticon.css";
import "./assets/css/font-awesome.css";
import "./assets/css/hover.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/jquery.bootstrap-touchspin.css";
import "./assets/css/jquery.mCustomScrollbar.min.css";
import "./assets/css/jquery.fancybox.min.css";
import "./assets/css/hover.css";

// redux import
import { Provider } from "react-redux";
import store from "./redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

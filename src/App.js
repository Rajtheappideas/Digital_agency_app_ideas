import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import Lottie from "react-lottie";
import loading from "./assets/animations/loading.json";

const Home = lazy(() => import("./pages/Home"));

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <BrowserRouter>
      <Toaster />
      <Suspense
        fallback={() => {
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            style={{
              position: "absolute",
              top: "1/2",
              left: "1/2",
              transform: "traslate(50%,50%)",
              width: "100%",
              height: "100%",
            }}
          />;
        }}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

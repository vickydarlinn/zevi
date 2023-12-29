import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import StorePage from "./pages/StorePage.tsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </>
  );
};

export default App;

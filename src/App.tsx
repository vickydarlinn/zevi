import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import StorePage from "./pages/StorePage.tsx";
import MainLayout from "./components/MainLayout.tsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

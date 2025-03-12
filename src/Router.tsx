import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Homepage = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading........!</div>}>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;

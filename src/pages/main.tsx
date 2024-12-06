import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import { App } from "./App";
import { AppFinished } from "./AppFinished";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/finished' element={<AppFinished />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

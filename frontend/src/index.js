import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ColorChangingGrid from "./components/Pages/ColorChangingGrid";
import GroceryListAndRecipeCreator from "./components/Pages/GroceryList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ColorChangingGrid />} />
        <Route path="/groceryList" element={<GroceryListAndRecipeCreator />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

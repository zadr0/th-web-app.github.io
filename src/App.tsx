import React from 'react';
import { } from "react-router"
import { Routes, Route } from "react-router-dom"
import components from "./components"


function App() {
  return (
      <div className="">
        <h1>Welcome</h1>
        <Routes>
          <Route path="/">
            <Route path="svo" element={<components.Main />}>
            </Route>
          </Route>
        </Routes>
      </div>
  );
}

export default App;

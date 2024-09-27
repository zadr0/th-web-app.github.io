import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Main, Second, Navbar } from "./structures/components"

function App() {
  return (
    <div>
      <div className="text-lg font-medium">
        svo
      </div>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="svo" element={<Main />} />
          <Route path=":id" element={<Second />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

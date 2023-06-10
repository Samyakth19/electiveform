import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Second from "./formpages/Second";
import Parent from "./pages/Parent";
import Home from "./pages/Home";
import Mech from "./pages/Mech";
import Ise from "./pages/Ise";
import Cse from "./pages/Cse";
import Civil from "./pages/Civil";
import Ece from "./pages/Ece";
import Eee from "./pages/Eee";
import Notfound from "./components/Notfound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="/next" element={<Second />} />
            <Route path="/Ise" element={<Ise />} />
            <Route path="/Mech" element={<Mech />} />
            <Route path="/Ece" element={<Ece />} />
            <Route path="/Cse" element={<Cse />} />
            <Route path="/Civil" element={<Civil />} />
            <Route path="/Eee" element={<Eee />} />
            <Route path="/Notfound" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

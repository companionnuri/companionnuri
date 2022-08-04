import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Main";
import Region from "./Region";
import Search from "./Search";
import Info from "./Info";
import Detail from "./Detail";
import Category from "./Category";
import Cafemain from "./Cafemain";
import Foodmain from "./Foodmain";
import Housemain from "./Housemain";
import Hospitalmain from "./Hospitalmain";
import Parkmain from "./Parkmain";
import Regionmain from "./Regionmain";
import Searchmain from "./Searchmain"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Cafemain" element={<Cafemain />} />
        <Route path="/Foodmain" element={<Foodmain />} />
        <Route path="/Housemain" element={<Housemain />} />
        <Route path="/Hospitalmain" element={<Hospitalmain />} />
        <Route path="/Parkmain" element={<Parkmain />} />
        <Route path="/Regionmain" element={<Regionmain />} />
        <Route path="/Searchmain" element={<Searchmain />} />
        <Route path="/Region" element={<Region />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;

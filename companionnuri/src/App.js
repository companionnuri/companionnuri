import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from './Main';
import Region from './Region';
import Search from './Search';
import Info from './Info';
import Detail from './Detail';
import Category from './Category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/region" element={<Region />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </Router>
    );
}

export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from './Main';
import Region from './Region';
import Search from './Search';
import Info from './Info'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/region" element={<Region />} />
      </Routes>
    </Router>
    );
}

export default App;



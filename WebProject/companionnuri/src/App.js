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
    <div className='container'>
      <Main />
    </div>
  );
}

export default App;
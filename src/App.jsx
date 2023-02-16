import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import WTG from './components/pages/WTG';
import BOP from './components/pages/BOP';
import Team from './components/pages/Team';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/wtg' element={<WTG/>}/>
            <Route path='/bop' element={<BOP/>}/>
            <Route path='/team' element={<Team/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


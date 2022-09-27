import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='skills' element={<Skills />} />
        <Route path='dashboard' element={<Dashboard />} />
        </Route>
    </Routes>
    </>
  );
}

export default App;

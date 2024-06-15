
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import About from './details/About';
import { Blog } from './details/Blog';
import { Contact } from './details/Contact';
import { Works } from './details/Works';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/blog" element={<Blog/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/works" element={<Works/>}/> 
      </Routes>
    </BrowserRouter>
  );
}


export default App;

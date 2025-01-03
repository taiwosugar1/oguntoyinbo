
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import About from './details/About';
import { Blog } from './details/Blog';
import { Contact } from './details/Contact';
import { Works } from './details/Works';
import DifferentAnimation from './sliderAndAnimations/DifferentAnimation';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import BlogDetails from './details/BlogDetails';
import ScrollToTop from './details/ScrollToTop ';
import Popup from './details/Popup';
import "aos/dist/aos.css";
import Aos from 'aos';



const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false); 

  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <BrowserRouter>
      {/* Ensure pages start at the top when navigating */}
     <ScrollToTop /> 
     <Popup/>
     {/* Scroll to Top Button */}
     {showScrollButton && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              <FaLongArrowAltUp />
            </button>
          )}
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/works" element={<Works/>}/> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/different-animation" element={<DifferentAnimation/>}/> 
      </Routes>
    </BrowserRouter>
  );
}


export default App;

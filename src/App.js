import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Vision from "./components/Vision";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import Galaxy from './components/Galaxy';


function App() {
  return (
    <div className="flex flex-col min-h-screen text-white font-sans selection:bg-[#00e676]/30 relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0a0a0a]">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1.7}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>
      <div className="relative z-10">
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Vision></Vision>
        <Blog></Blog>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Courses/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
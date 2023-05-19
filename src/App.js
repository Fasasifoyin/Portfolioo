import { useRef } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Handles from "./component/Handles";
import About from "./component/About";
import Project from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { useInView } from "framer-motion";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <div className="App position-relative">
      <Navbar />
      <Home />
      {!isInView && <Handles />}
      <About />
      <Project />
      <Contact />
      <div ref={ref}>
        <Footer />
      </div>
    </div>
  );
}

export default App;

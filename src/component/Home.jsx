import { Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { pictures } from "../utils/picture";

const Home = () => {
  const [index, setIndex] = useState(0);

  const changeIndex = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1);
  };

  setTimeout(changeIndex, 7000);

  return (
    <div
      id="home"
      className="home text-white position-relative d-flex align-items-center justify-content-center"
    >
      <motion.div
        initial={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        animate={{ opacity: 0.1 }}
        className="backdrop"
      >
        <Image
          src={pictures[index]}
          alt="..."
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-50px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="position-relative d-flex flex-column gap-3 px-4  justify-content-center align-items-center"
        style={{ zIndex: "5", width: "100%", maxWidth: "900px" }}
      >
        <h1 className="display-4 text-center mt-3">
          HEY, I'M FASASI FOYIN JOHN
        </h1>
        <div style={{ width: "80%" }} className="text-center mb-0 ">
          <p className="heading2">
            I am a talented <span style={{color:'rgb(0, 158, 237)'}}>fullstack web developer</span>  with experience working on a
            variety of projects. I pride myself on my ability to bring ideas to
            life through code.
          </p>
        </div>
        <motion.div
          whileHover={{
            scale: 1.3,
          }}
          transition={{ duration: 0.5 }}
        >
          <Link to="https://wa.link/b5zn3u" target="_blank" rel="noreferrer">
            <Button
              className="rounded-1"
              size="lg"
              style={{
                background: "rgb(255, 5, 19)",
                border: "rgb(255, 5, 19)",
              }}
            >
              LET'S CHAT
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

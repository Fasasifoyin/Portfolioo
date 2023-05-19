import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";
import { Link } from "react-scroll";
import { Twirl as Hamburger } from "hamburger-react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="position-fixed top-0 w-100 py-2 py-lg-3"
      style={{ backgroundColor: "rgb(5,5,5)", zIndex: "10", height: "70px" }}
    >
      <Container className="h-100">
        <div className="d-flex justify-content-between align-items-center px-lg-2 h-100 heading">
          <div className="d-flex gap-2 align-items-center">
            <motion.div
              whileTap={{ scale: 0.9 }}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgb(255,5,19)",
              }}
              className="d-flex justify-content-center align-items-end"
            >
              <Image
                src="data:image/png;base64,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"
                style={{
                  objectFit: "contain",
                  width: "90%",
                  borderRadius: "50%",
                  height: "90%",
                }}
              />
            </motion.div>
            <span style={{color:'rgb(213, 215, 213)'}}>
              {" "}
              <span style={{ color: "rgb(255, 19, 5)", fontSize:'1.7rem' }}>F</span>asasi{" "}
              <span style={{ color: "rgb(255, 19, 5)", fontSize:'1.7rem' }}>F</span>oyin
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="d-none d-md-flex align-items-center gap-4 text-white "
          >
            <div
              style={{ height: "35px" }}
              className="d-flex align-items-center bbhover"
            >
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor"
                style={{color: "rgb(213,215,213)"}}
              >
                Home
              </Link>
            </div>

            <div
              style={{ height: "35px" }}
              className="d-flex align-items-center bbhover"
            >
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor"
                style={{color: "rgb(213,215,213)"}}
              >
                About
              </Link>
            </div>

            <div
              style={{ height: "35px" }}
              className="d-flex align-items-center bbhover"
            >
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor"
                style={{color: "rgb(213,215,213)"}}
              >
                Project
              </Link>
            </div>

            <div
              style={{ height: "35px" }}
              className="d-flex align-items-center bbhover"
            >
              <Link
                activeClass="active"
                to="message"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor"
                style={{color: "rgb(213,215,213)"}}
              >
                Message me
              </Link>
            </div>
          </motion.div>
          <div className="d-lg-none">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={25}
              color="#ff1305"
            />
          </div>
        </div>
      </Container>
      {isOpen && <MobileNav setOpen={setOpen} isOpen={isOpen} />}
    </motion.div>
  );
};

export default Navbar;

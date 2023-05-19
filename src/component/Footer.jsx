import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineMail
} from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { links } from "../utils/links";

const Footer = () => {
  const [current, setCurrent] = useState(1);

  const icons = [
    <AiFillGithub size="2rem" />,
    <AiFillLinkedin size="2rem" />,
    <AiFillTwitterCircle size="2rem" />,
    <AiFillInstagram size="2rem" />,
  ];

  return (
    <div className="w-100 footerHei" style={{ backgroundColor: "rgb(5,5,5)" }}>
      <Container className="pt-5 pb-5 pb-lg-0">
        <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-0 justify-content-between">
          <div
            className="d-flex flex-column gap-2 footerWidth"
            style={{ color: "rgb(213, 215, 213" }}
          >
            <h4>HEY, I'M FASASI FOYIN JOHN</h4>
            <p className="small">
              I am a talented fullstack web developer with experience working on
              a variety of projects. I pride myself on my ability to bring ideas
              to life through code.
            </p>
          </div>
          <div className="d-flex flex-column gap-2  align-items-center align-items-lg-start">
            <h4 style={{ color: "rgb(255, 19, 5)" }}>Social</h4>
            <div className="d-flex gap-2">
              {icons.map((icon, i) => (
                <Link
                  key={i}
                  to={links[current]}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setCurrent(i)}
                  onMouseEnter={() => setCurrent(i)}
                >
                  <motion.div
                    initial={{ color: "#d6d6ce" }}
                    transition={{ duration: 1 }}
                    whileHover={{
                      scale: 1.3,
                      color: "#ff0513",
                    }}
                    className="w-100"
                  >
                    {icon}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{ border: "1px solid rgb(255,255,255,0.5)" }}
          className="mt-4 mb-4"
        />
        <div className="d-flex justify-content-between">
          <span className="text-white small">
            inspired by{" "}
            <Link
              to="https://www.rammaheshwari.com/"
              target="_blank"
              rel="noreferrer"
            >
              <strong
                className="small uni"
                style={{ color: "rgb(255, 19, 5)" }}
              >
                Ram Maheshwari
              </strong>
            </Link>
          </span>
          <div className="d-flex gap-2 align-items-center">
            <AiOutlineMail color="#d6d6ce" size='1.7rem' />
          <span className="text-white small email">fasasifoyin@gmail.com</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

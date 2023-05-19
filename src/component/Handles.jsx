import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { links } from "../utils/links";

const Handles = () => {
  const [current, setCurrent] = useState(1);

  const icons = [
    <AiFillGithub size="2.5rem" />,
    <AiFillLinkedin size="2.5rem" />,
    <AiFillTwitterCircle size="2.5rem" />,
    <AiFillInstagram size="2.5rem" />,
  ];

  return (
    <div
      className="d-none d-lg-block position-fixed top-50 translate-middle-y text-white"
      style={{ left: "0px", width: "70px", zIndex: "5" }}
    >
      <div className="d-flex flex-column gap-3 w-100 align-items-center">
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
              initial={{ color: "#d6d6ce", x: "-100vw" }}
              animate={{ x: 0 }}
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
  );
};

export default Handles;

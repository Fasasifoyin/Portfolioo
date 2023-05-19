import React, { useState, useRef, useEffect } from "react";
import { Image, Button } from "react-bootstrap";
import useWindowSize from "../hooks/useWindowSize";
import { useInView, motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectStructure1 = ({
  image1,
  image2,
  title,
  body,
  liveLink,
  seeCode,
}) => {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { amount: 0.05, once: true });
  const isInView2 = useInView(ref2, { amount: 0.05, once: true });
  const mainControls = useAnimation();
  const mainControls2 = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  useEffect(() => {
    if (isInView2) {
      mainControls2.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView2]);

  return (
    <>
      <div className="d-lg-flex justify-content-between">
        <div ref={ref} className="picturediv">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
            className="position-relative w-100"
            style={{ height: "500px" }}
          >
            <Image
              className="w-100 h-100"
              src={
                width >= 992
                  ? "https://euro-linux.com/wp-content/uploads/EuroLinux-Desktop-home-1.png"
                  : "https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307__480.png"
              }
            />

            <div
              className="position-absolute top-0 imgheight"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <Image
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
                src={width >= 992 ? image1 : image2}
              />

              {show && (
                <div
                  className="d-none d-lg-block position-absolute top-0 w-100 h-100"
                  style={{ background: "rgb(0, 158, 237, 0.7)" }}
                >
                  <div className="w-100 h-100 d-flex flex-column gap-3 justify-content-center align-items-center">
                    <Link to={liveLink} target="_blank" rel="noreferrer">
                      <Button
                        className="border border-none"
                        style={{
                          backgroundColor: "rgb(255, 19, 5)",
                          width: "180px",
                        }}
                      >
                        Live Link
                      </Button>
                    </Link>
                    <Link to={seeCode} target="_blank" rel="noreferrer">
                      <Button
                        className="border border-none"
                        style={{
                          backgroundColor: "rgb(255, 19, 5)",
                          width: "180px",
                        }}
                      >
                        See code
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <div ref={ref2} className="picturediv">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls2}
            transition={{ duration: 1, type: "spring", mass: 1.5 }}
            className="w-100 h-100 mt-2 mt-lg-0 d-flex flex-column justify-content-center align-items-center"
          >
            <h1 style={{ color: "rgb(0, 158, 237)" }}>{title}</h1>
            <p className="text-center knowme">{body}</p>
            <div className="d-lg-none d-flex gap-3">
              <Link to={liveLink} target="_blank" rel="noreferrer">
                <Button
                  className="border border-none"
                  style={{ backgroundColor: "rgb(255, 19, 5)" }}
                >
                  Live Link
                </Button>
              </Link>
              <Link to={seeCode} target="_blank" rel="noreferrer">
                <Button
                  className="border border-none"
                  style={{ backgroundColor: "rgb(255, 19, 5)" }}
                >
                  See code
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectStructure1;

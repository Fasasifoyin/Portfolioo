import { useRef, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";
import { Container } from "react-bootstrap";
import { Row, Col, Image } from "react-bootstrap";
import skills from "../utils/skills";

const About = () => {
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
    <div id="about" className="mt-5">
      <motion.div>
        <Container>
          <div className="d-flex justify-content-center">
            <h3
              className="rounded-3 p-2 text-center fw-bold text-white"
              style={{ backgroundColor: "rgb(255, 5, 19)" }}
            >
              About me
            </h3>
          </div>

          <Row className="mt-3 gy-3">
            <Col xl={6}>
              <div ref={ref}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="d-flex flex-column gap-4 "
                >
                  <h2 className="display-6" style={{ color: "rgb(0,158,237)" }}>
                    Get to know me
                  </h2>
                  <div className="d-flex flex-column gap-2 text-white col1">
                    <div>
                      <p className="knowme">
                        I am a talented fullstack web developer with experience
                        working on a variety of projects. I have a passion for
                        creating dynamic, user-friendly websites that are both
                        visually appealing and highly functional
                      </p>
                    </div>
                    <div>
                      <p className="knowme">
                        I have the skills and expertise to take on any project,
                        from simple websites to complex web applications. I'm
                        committed to staying up to date with the latest web
                        development technologies and techniques to deliver the
                        best possible results to my client
                      </p>
                    </div>
                    <div>
                      <p className="knowme">
                        I pride myself on my ability to bring ideas to life
                        through code. Whether I'm working on the front-end or
                        back-end of a project, I'm always striving to create a
                        seamless, intuitive user experience that meets the needs
                        of my clients and user
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Col>
            <Col xl={6}>
              <div ref={ref2}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls2}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="d-flex flex-column gap-4"
                >
                  <h3 className="display-6" style={{ color: "rgb(0,158,237)" }}>
                    My skills
                  </h3>

                  <div className="d-flex flex-wrap gap-3">
                    {skills.map((each, index) => (
                      <div
                        key={index}
                        className="d-flex flex-column gap-2 text-center"
                      >
                        <div style={{ width: "100px", height: "80px" }}>
                          <Image
                            src={each.image}
                            className="w-100 h-100"
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <p style={{ color: "rgb(213, 215, 213)" }}>{each.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default About;

import { Container } from "react-bootstrap";
import { projects } from "../utils/projects";
import ProjectStructure1 from "./ProjectStructure1";
import ProjectStructure2 from "./ProjectStructure2";

const Project = () => {
  return (
    <div className="text-white mt-5 pb-5 " id="project">
      <Container>
        <div className="d-flex justify-content-center">
          <h3
            className="rounded-3 p-2 text-center fw-bold text-white"
            style={{ backgroundColor: "rgb(255, 5, 19)" }}
          >
            Projects
          </h3>
        </div>

        <div className="d-flex flex-column gap-5 mt-3 mt-lg-4">
          <ProjectStructure1 {...projects[0]} />
          <ProjectStructure2 {...projects[1]} />
          <ProjectStructure1 {...projects[1]} />
        </div>
      </Container>
    </div>
  );
};

export default Project;

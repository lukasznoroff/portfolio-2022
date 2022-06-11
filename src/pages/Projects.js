import {UnderLine} from "../components/UnderLine";
import ProjectCards from "../components/ProjectCards";
import {motion} from "framer-motion";
import {pageTransitionProjects, textAnimation} from "../animation/animation";
import styled from "styled-components";

const Projects = () => {
    return (
        <Wrapper variants={pageTransitionProjects} initial="hidden" animate="show">
            <div className="container">
                <div className="text-wrapper">
                    <motion.h1 variants={textAnimation}><span className="home-heading">PROJECTS</span></motion.h1>
                    <UnderLine/>
                </div>
                <ProjectCards/>
            </div>
        </Wrapper>
    );
};

export default Projects;


const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: relative;
  @media (max-width: 800px) {
    height: auto;
  }

  .container {
    width: 75%;
    width: 90%;
    height: 85%;
    position: absolute;
    left: 0;
    left: 5%;
    top: 50%;
    transform: translate(0, -50%);
    background-color: #d9cab7;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    @media (max-width: 800px) {
      align-items: flex-start;
      align-items: flex-start;
      width: 100vw;
      height: 180vh;
      left: 0;
      transform: translate(0, 5%);
    }

    .text-wrapper {
      position: relative;
    }

    padding: 40px;
    p {
      padding: 5px;
    }
  }
`;

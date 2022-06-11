import {VerticalLine} from "../components/VerticalLine";
import {UnderLine} from "../components/UnderLine";
import {motion} from "framer-motion";
import {pageTransition, textAnimation} from "../animation/animation";
import styled from "styled-components";

const About = () => {
    return (
        <Wrapper variants={pageTransition} initial="hidden" animate="show">
            <div className="container">
                <div className="text-wrapper">
                    <VerticalLine/>
                    <motion.h1 variants={textAnimation}><span className="home-heading">ABOUT</span></motion.h1>
                    <UnderLine/>
                </div>
                <p className="about-text">
                    I am a motivated frontend developer seeking a full-time position in the field of coding
                    where I can apply my knowledge and skills for continuous improvement. As a future web
                    developer I like to create projects from scratch but also improve existing ones. For the
                    last two years I have built several commercial projects. Current projects I build used HTML,
                    SASS, JAVASCRIPT. I'm still learning and I'm hungry for knowledge so I started a year-long
                    course in which I learn REACT JS, NODE JS, EXPRESS JS.
                </p>
            </div>
        </Wrapper>
    );
};

export default About;

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: relative;

  .container {
    width: 75%;
    height: 85%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    background-color: #d9cab7;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    @media (max-width: 800px) {
      align-items: flex-start;
      width: 100vw;
    }

    .text-wrapper {
      position: relative;
      max-width: 40%;
      display: flex;
    }

    padding: 40px;

    p {
      padding: 5px;
    }

    .about-text {
      display: flex;
      align-self: center;
      align-items: center;
      max-width: 35%;
      height: 70%;
      line-height: 1.3;

      @media (max-width: 800px) {
        align-items: flex-start;
        align-items: center;
        line-height: 1.4;
        max-width: 100vw;
        margin-top: 25px;
      }
    }
  }
`;
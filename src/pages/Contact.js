import {UnderLine} from "../components/UnderLine";
import Form from "../components/Form";
import styled from "styled-components";
import {VerticalLine} from "../components/VerticalLine";
import {motion} from "framer-motion";
import {pageTransition, textAnimation} from "../animation/animation";

const Contact = () => {
    return (
        <Wrapper variants={pageTransition} initial="hidden" animate="show">
            <div className="container">
                <div className="text-wrapper">
                    <VerticalLine/>
                    <motion.h1 variants={textAnimation}><span className="home-heading">CONTACT</span></motion.h1>
                    <UnderLine/>
                </div>
                <Form/>
            </div>
        </Wrapper>
    );
};

export default Contact;


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
    }

    padding: 40px;

    p {
      padding: 5px;
    }
  }
`;
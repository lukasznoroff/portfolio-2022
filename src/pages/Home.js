import styled from "styled-components";
import {Line} from "../components/Line";
import {motion} from "framer-motion";
import {pageTransition, textAnimation2, textAnimation3} from "../animation/animation";

const Home = () => {
    return (
        <Wrapper variants={pageTransition} initial="hidden" animate="show">
            <div className="container">
                <div className="text-wrapper">
                    <Line/>
                    <motion.h1 variants={textAnimation2}><span className="home-heading">PORT<br/>FOLIO</span></motion.h1>
                    <motion.p variants={textAnimation3}>Lukasz Kaminski</motion.p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;

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
    justify-content: center;
    flex-direction: column;
    
    @media (max-width: 800px) {
      align-items: flex-start;
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


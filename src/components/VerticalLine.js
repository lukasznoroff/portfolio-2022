import {motion} from "framer-motion";
import styled from "styled-components";

export function VerticalLine() {
    return (
        <Wrapper>
            <motion.div className="line"
                        style={{
                            width: "3px",
                            position: "absolute",
                            top: "-170%",
                            left: "-10%",
                            opacity: 0,
                        }}
                        initial={{backgroundColor: "#000", opacity: 0}}
                        animate={{
                            opacity: 1,
                            height: "65vh",
                        }}
                        transition={{duration: 1, delay: 0.3}}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .line {
    @media (max-width: 1500px) {
      top: -180% !important;
    }
    @media (max-width: 800px) {
      display: none !important;
    }
  }
`;
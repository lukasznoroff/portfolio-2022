import {motion} from "framer-motion";
import styled from "styled-components";

export function Line() {
    return (
        <Wrapper>
            <motion.div className="line"
                        style={{
                            width: "3px",
                            position: "absolute",
                            top: "-170%",
                            left: "2%",
                            opacity: 0,
                        }}
                        initial={{backgroundColor: "#000", opacity: 0}}
                        animate={{
                            opacity: 1,
                            height: "175%",
                        }}
                        transition={{duration: 1, delay: 0.3}}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  .line {
    @media (max-width: 1500px) {
      top: -180% !important;
    }
    @media (max-width: 800px) {
      top: -400% !important;
      height: 80vh !important;
      left: -3% !important;
      display: none !important;
    }
  }
`;

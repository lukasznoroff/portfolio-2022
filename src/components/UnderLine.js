import { motion } from "framer-motion";
import styled from "styled-components";

export function UnderLine() {
    return (
        <Wrapper>
            <motion.div className="line"
                        style={{
                            width: "223px",
                            height: "3px",
                            position: "absolute",
                            top: "90%",
                            left: "-20%",
                            opacity:0,
                        }}
                        initial={{ backgroundColor: "#000", opacity:0}}
                        animate={{
                            opacity:1,
                            width: "120%",
                        }}
                        transition={{ duration: 1, delay: 0.3 }}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  .line {
    @media (max-width: 800px) {
      display: none !important;
    }
  }
`;
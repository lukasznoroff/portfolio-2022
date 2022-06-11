import styled from "styled-components";

const Modal = ({children}) => {
    return (
        <Wrapper>
            <p>{children}</p>
        </Wrapper>
    )
};

export default Modal;


const Wrapper = styled.div`
  padding: clamp(20px, 1.5vw, 40px);
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(14px, 1.3vw, 16px);
  border: 1px solid #000;
`;
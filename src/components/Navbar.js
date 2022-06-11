import {useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const showSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <HamburgerWrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </HamburgerWrapper>

                <StyledNav isOpen={isOpen}>
                    <ul onClick={showSidebar}>
                        <NavLink to="/">
                            <li className="nav-link">Home</li>
                        </NavLink>
                        <NavLink  to="projects">
                            <li className="nav-link">Projects</li>
                        </NavLink>
                        <NavLink to="about">
                            <li className="nav-link">About</li>
                        </NavLink>
                        <NavLink to="contact">
                            <li className="nav-link">Contact</li>
                        </NavLink>
                    </ul>
                </StyledNav>
        </>
    );
};

export default Navbar;


const StyledNav = styled.nav`
  position: absolute;
  width: 23%;
  height: 85%;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;

  ul {
    display: flex;
    flex-direction: column;
    background-color: #d9d2c1;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    transition: transform ease-in-out 0.4s;
    transform: translateX(${({isOpen}) => isOpen ? "0%" : "-100%"});

    @media (max-width: 800px) {
      width: 100vw;
      height: 100vh;
    }

    li {
      padding: 10px;
      transition: transform ease-in-out;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const HamburgerWrapper = styled.div`
  position: absolute;
  top: calc(15% - 7.5%);
  left: 95.5%;
  cursor: pointer;
  z-index: 5;
  @media (max-width: 800px) {
    top: 3%;
    left: 90%;
  }
  @media (max-width: 500px) {
    left: 85%;
  }

  > * {
    display: block;
    width: 35px;
    height: 3px;
    margin: 5px;
    margin-top: 0;
    background-color: #1B1c1C;
    transition: 0.3s all;
  }
  .line1 {
    transform: translateX(${({isOpen})=> isOpen ? "calc(20px - 10px)" : 0});
  }
  .line3 {
    transform: translateX(${({isOpen})=> isOpen ? "calc(-20px + 10px)" : 0});
  }
`;

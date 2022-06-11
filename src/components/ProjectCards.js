import {projects} from "../data";
import styled from "styled-components";
import {motion} from "framer-motion";


const ProjectCards = () => {
    return (
        <Wrapper>
            {
                projects.map((item, index) => {
                    return (
                        <motion.div key={item.id} className="card" initial={{opacity: 0, translateX: -20}} animate={{opacity: 1, translateX: 0}} transition={{duration: 0.8, delay: index * 0.8, type: 'spring'}}>
                            <div className="wrapper-card">
                                <div className="image-wrapper">
                                    <img src={item.img} alt={item.title}/>
                                </div>
                                <div className="col-right">
                                    <h3>{item.title}</h3>
                                    <p className="description-text">{item.description}</p>
                                    <div className="login-data">
                                        <p>Login: {item.login}</p>
                                        <p>Password: {item.password}</p>
                                    </div>
                                    <div className="links-wrapper">
                                        <a href={item.github} target="_blank" rel="noreferrer">Github</a>
                                        <a href={item.website} target="_blank" rel="noreferrer">Website</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })
            }
        </Wrapper>
    );
};

export default ProjectCards;

const Wrapper = styled.div`
  .wrapper-card {
    border: 1px solid #929191;
  }

  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  top: 17%;
  height: 50%;
  left: 0%;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    top: 10%;
  }

  .card {
    height: 27vh;
    max-width: 300px;
    margin-left: 22px;
    margin-right: 22px;

    @media (max-width: 800px) {
      height: 100%;
      margin-bottom: 30px;
    }

    .image-wrapper {
      height: 100%;
      width: 100%;
      display: flex;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;

        &:hover {
          @media (max-width: 800px) {
            transform: none;
          }
        }
      }
    }

    .col-right {
      padding: 1vw;
      height: 19vw;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

      @media (max-width: 800px) {
        display: flex;
        justify-content: space-evenly;
        height: 100%;
        position: relative;
        background-color: transparent;
        border: none;
        box-shadow: none;
        backdrop-filter: none;
        transform: none;
      }

      &:hover {
        @media (max-width: 800px) {
          transform: none;
        }
      }

      h3 {
        font-size: 1vw;
        margin-bottom: 10px;
        border-bottom: 1px solid #000;

        @media (max-width: 800px) {
          font-size: 16px;
        }
      }

      .description-text {
        font-size: 12px;
      }

      .login-data {
        font-size: 12px;
        color: #6a6a6a;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        height: 100%;
      }

      .links-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: auto;

        a {
          font-size: 13px;
          position: relative;
          margin-bottom: 5px;
          padding: 5px;
          text-decoration: underline;
          transition: all ease-in-out 0.4s;

          &:hover {
            color: rgb(249, 105, 14);
          }

          @media (max-width: 800px) {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
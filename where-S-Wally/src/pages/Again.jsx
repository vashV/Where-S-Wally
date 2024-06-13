import { useNavigate } from "react-router-dom";
import selfi from "../img/selfi.png";
import styled from "styled-components";

const mySelfi = selfi;

const Again = () => {
  const navigate = useNavigate();
  const navigateToGoogle = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <>
      <Image>
        <img src={mySelfi} alt="selfi" />
      </Image>
      <P>
        <h2>You found me!!! Nice job!</h2>
        <h3>Would you like to try again?</h3>
      </P>
      <Div>
        <Button onClick={() => navigate("/")}> Yes </Button>
        <Button onClick={navigateToGoogle}> No </Button>
      </Div>
    </>
  );
};

const Image = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const P = styled.div`
  h2,
  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Button = styled.div`
  font-size: 2rem;
  color: black;
  // background-color: #d2b48c;
  border: 2px solid black;
  border-radius: 1rem;
  cursor: pointer;
  margin: 3rem 1rem 3rem 1rem;
  padding: 1rem 3rem 1rem 3rem;

  &:hover {
    color: white;
    background-color: #d2b48cc0;
  }
`;

export default Again;

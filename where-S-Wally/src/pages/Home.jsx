import logo from "../img/logo.jpg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const loggo = logo;

const Home = () => {
  const navigate1 = useNavigate();
  return (
    <Container>
      <Left>
        <img src={loggo} alt="logo" />
      </Left>
      <Right>
        <h1>Hi! I'm Wally!</h1>
        <h2>Can you find me?</h2>
        <h3>If you do, Just click on me!</h3>
        <Button onClick={() => navigate1("/Step1")}> Start Playing </Button>
        <p>I'll give you 3 Tries </p>
        <p>And </p>
        <p>A Count down of 2 minutes</p>
        <h2>Good luck!</h2>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border: 2px solid black;
`;

const Button = styled.div`
  font-size: 2rem;
  color: white;
  background-color: #5972bd;
  margin: 5rem 1rem 5rem 1rem;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #5972bdec;
  }
`;

const Left = styled.div`
  width: 50%;
  margin-right: 3rem;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;

  h1,
  h2,
  h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

export default Home;

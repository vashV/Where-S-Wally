import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import whereswally4 from "../img/whereswally4.jpg";
import Hint from "../Hint";

const pic4 = whereswally4;

const StartingPoint = () => {
  return {
    tries: 3,
    timer: 120,
  };
};

const Step4 = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState(() => {
    const savedState = localStorage.getItem("gameState");
    return savedState ? JSON.parse(savedState) : StartingPoint();
  });

  useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(gameState));
  }, [gameState]);

  const handleTries = () => {
    setGameState((prevState) => ({
      ...prevState,
      tries: Math.max(prevState.tries - 1, 0),
    }));
  };

  useEffect(() => {
    if (gameState.tries === 0 || gameState.timer <= 0) {
      navigate("/TryAgain");
    }
  }, [gameState.tries, gameState.timer, navigate]);

  useEffect(() => {
    const handleTimer = setInterval(() => {
      setGameState((prevState) => ({
        ...prevState,
        timer: prevState.timer - 1,
      }));
    }, 1000);

    return () => clearInterval(handleTimer);
  }, []);

  const handleSuccess = () => {
    localStorage.removeItem("gameState");
    navigate("/Step5");
  };

  const handleClock = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
      <Image onClick={gameState.tries > 0 ? handleTries : undefined}>
        <img
          src={pic4}
          alt="pic4"
          style={{
            cursor: gameState.tries > 0 ? "pointer" : "not-allowed",
          }}
        />
      </Image>
      <Circle className="circle" onClick={handleSuccess}></Circle>
      <Hint message="Some people are sliding over me on a rope" />
      <P1>Tries left: {gameState.tries}</P1>
      <P2>{handleClock(gameState.timer)}</P2>
      <P3>Level 4</P3>
    </>
  );
};

const Image = styled.div`
  height: 95vh;
  border: 2px solid black;
  display: flex;

  position: relative;

  img {
    display: block;
  }
`;

const Circle = styled.div`
  cursor: pointer;
  bottom: 41.5vh;
  left: 20.7vw;
  opacity: 0;

  position: fixed;
`;

const P1 = styled.div`
  top: 15vh;
  left: 5.6vw;

  position: fixed;
`;

const P2 = styled.div`
  text-align: center;
  width: 10rem;
  border: 2px solid black;
  border-radius: 1rem;
  padding: 1rem;
  top: 20vh;
  left: 5vw;

  position: fixed;
`;

const P3 = styled.div`
  font-size: 2.5rem;
  top: 3vh;
  left: 5.6vw;

  position: fixed;
`;

export default Step4;

import React, { useState, useEffect } from "react";
import { Container, Box, Image } from "@chakra-ui/react";

const Index = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  const handleKeyDown = (event) => {
    const { key } = event;
    setPosition((prevPosition) => {
      switch (key) {
        case "ArrowUp":
          return { ...prevPosition, top: prevPosition.top - 10 };
        case "ArrowDown":
          return { ...prevPosition, top: prevPosition.top + 10 };
        case "ArrowLeft":
          return { ...prevPosition, left: prevPosition.left - 10 };
        case "ArrowRight":
          return { ...prevPosition, left: prevPosition.left + 10 };
        default:
          return prevPosition;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box position="relative" width="100%" height="100%">
        <Image
          src="/images/cat.png"
          alt="Movable Cat"
          position="absolute"
          top={`${position.top}%`}
          left={`${position.left}%`}
          width="100px"
          height="100px"
        />
      </Box>
    </Container>
  );
};

export default Index;
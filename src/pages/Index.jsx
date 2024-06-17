import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Container, Box, Image, Button, VStack, HStack } from "@chakra-ui/react";

const Index = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [isAnimating, setIsAnimating] = useState(false);

  const handleKeyDown = (event) => {
    const { key } = event;
    setIsAnimating(true);
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

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleButtonClick = (direction) => {
    setIsAnimating(true);
    setPosition((prevPosition) => {
      switch (direction) {
        case "up":
          return { ...prevPosition, top: prevPosition.top - 10 };
        case "down":
          return { ...prevPosition, top: prevPosition.top + 10 };
        case "left":
          return { ...prevPosition, left: prevPosition.left - 10 };
        case "right":
          return { ...prevPosition, left: prevPosition.left + 10 };
        default:
          return prevPosition;
      }
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box position="relative" width="100%" height="100%">
        <Image
          src="/images/realistic-cat.png"
          alt="Movable Cat"
          position="absolute"
          top={`${position.top}%`}
          left={`${position.left}%`}
          width="100px"
          height="100px"
          transition="top 0.3s, left 0.3s"
        />
      </Box>
      <VStack spacing={4} mt={4}>
        <Button onClick={() => handleButtonClick("up")}><FaArrowUp /></Button>
        <HStack spacing={4}>
          <Button onClick={() => handleButtonClick("left")}><FaArrowLeft /></Button>
          <Button onClick={() => handleButtonClick("right")}><FaArrowRight /></Button>
        </HStack>
        <Button onClick={() => handleButtonClick("down")}><FaArrowDown /></Button>
      </VStack>
    </Container>
  );
};

export default Index;
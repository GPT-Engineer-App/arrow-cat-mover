import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Container, Box, Image, Button, VStack, HStack, Text } from "@chakra-ui/react";

const Index = () => {
  const [catPosition, setCatPosition] = useState({ top: 50, left: 50 });
  const [dogPosition, setDogPosition] = useState({ top: 50, left: 50 });
  const [isAnimating, setIsAnimating] = useState(false);

  const handleKeyDown = (event) => {
    const { key } = event;
    setIsAnimating(true);
    if (key.startsWith("Arrow")) {
      setCatPosition((prevPosition) => {
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
    } else {
      setDogPosition((prevPosition) => {
        switch (key) {
          case "w":
            return { ...prevPosition, top: prevPosition.top - 10 };
          case "s":
            return { ...prevPosition, top: prevPosition.top + 10 };
          case "a":
            return { ...prevPosition, left: prevPosition.left - 10 };
          case "d":
            return { ...prevPosition, left: prevPosition.left + 10 };
          default:
            return prevPosition;
        }
      });
    }
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

  const handleButtonClick = (direction, animal) => {
    setIsAnimating(true);
    if (animal === "cat") {
      setCatPosition((prevPosition) => {
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
    } else {
      setDogPosition((prevPosition) => {
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
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box position="relative" width="100%" height="100%">
        <Image
          src="/images/realistic-cat.png"
          alt="Movable Cat"
          position="absolute"
          top={`${catPosition.top}%`}
          left={`${catPosition.left}%`}
          width="100px"
          height="100px"
          transition="top 0.3s, left 0.3s"
        />
        <Image
          src="/images/realistic-dog.png"
          alt="Movable Dog"
          position="absolute"
          top={`${dogPosition.top}%`}
          left={`${dogPosition.left}%`}
          width="100px"
          height="100px"
          transition="top 0.3s, left 0.3s"
        />
      </Box>
      <VStack spacing={4} mt={4}>
        <Text>Cat Controls</Text>
        <Button onClick={() => handleButtonClick("up", "cat")}><FaArrowUp /></Button>
        <HStack spacing={4}>
          <Button onClick={() => handleButtonClick("left", "cat")}><FaArrowLeft /></Button>
          <Button onClick={() => handleButtonClick("right", "cat")}><FaArrowRight /></Button>
        </HStack>
        <Button onClick={() => handleButtonClick("down", "cat")}><FaArrowDown /></Button>
      </VStack>
      <VStack spacing={4} mt={4}>
        <Text>Dog Controls</Text>
        <Button onClick={() => handleButtonClick("up", "dog")}><FaArrowUp /></Button>
        <HStack spacing={4}>
          <Button onClick={() => handleButtonClick("left", "dog")}><FaArrowLeft /></Button>
          <Button onClick={() => handleButtonClick("right", "dog")}><FaArrowRight /></Button>
        </HStack>
        <Button onClick={() => handleButtonClick("down", "dog")}><FaArrowDown /></Button>
      </VStack>
    </Container>
  );
};

export default Index;
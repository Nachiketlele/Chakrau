import React from "react";
import {
  Box,
  Button,
  Stack,
  Container,
  Input,
  IconButton,
} from "@chakra-ui/react";
import "./Navbar.css";
import { SearchIcon } from "@chakra-ui/icons";
const Navbar = () => {
  let arr = [
    { title: "TaleWind", role: "Lead Producer", salary: "5LPA" },
    { title: "SlimWickky", role: "Full Stack Developer", salary: "8LPA" },
    { title: "JumpSearch", role: "SDE", salary: "10LPA" },
    { title: "TaleWind", role: "Front-End-Developer", salary: "6LPA" },
    { title: "SlimWickky", role: "Back-End-Developer", salary: "15LPA" },
  ];

  return (
    <>
      <Box bg="white" w="100%" p={4} color="white" border="1px solid grey">
        <Stack
          direction="row"
          spacing={4}
          align="center"
          justifyContent="right"
        >
          <Button colorScheme="teal" variant="ghost" color="#785dd4">
            Sign In
          </Button>
          <Button colorScheme="teal" variant="outline" color="#785dd4">
            Sign Up
          </Button>
          <Button
            variant="solid"
            bg="linear-gradient(90deg, #8930fd, #49ccf9)"
            _hover="linear-gradient(90deg, #8930fd, #49ccf9)"
          >
            Post a job
          </Button>
        </Stack>
      </Box>
      <Container
        maxW="1000px"
        // border="1px solid black"
        centerContent
        marginTop="80px"
      >
        <Box color="black">
          <p style={{ fontSize: "60px", fontWeight: "700", color: "#2d3748", lineHeight:"55px" }}>
            Find The Right
          </p>
          <p style={{ fontSize: "60px", fontWeight: "700", color: "#2d3748" }}>
            <span className="text">Four-Day</span> Week Job
          </p>
        </Box>
        <Box color="black" marginTop="30px">
          <Input
            size="lg"
            w="450px"
            variant="outline"
            placeholder="Basic usage"
            className="st"
          />
          <IconButton
            marginLeft="10px"
            size="lg"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </Box>
        <Stack
        marginTop="20px"
        paddingBottom="20px"
        // marginRight="30px"
          direction="row"
          spacing={4}
          align="center"
          // justifyContent="center"
        >
          <Button bg="#7f5ad4" w="160px" variant="solid" color="white">
            Remote
          </Button>
          <Button bg="#7f5ad4" w="160px"  variant="solid" color="white">
            Tech
          </Button>
          <Button bg="#7f5ad4" w="160px"  variant="solid" color="white">
            Marketing
          </Button>
        </Stack>
      </Container>
      <div className="box">
          
      </div>
    </>
  );
};

export default Navbar;

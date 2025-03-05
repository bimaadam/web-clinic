import { Box, VStack } from "@chakra-ui/react";
import Features from "@/components/Features";
import Geser from "@/components/Geser";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <VStack spacing={0} align="stretch">
      <Box width={"auto"} height={"auto"}>
        <Geser />
      </Box>
      <Box>
        <Hero />
      </Box>
      <Box>
        <Features />
      </Box>
    </VStack>
  );
};

export default Home;
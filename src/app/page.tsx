import { Box, VStack } from "@chakra-ui/react";
import Features from "@/components/Features";
import Geser from "@/components/Geser";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <VStack bg="whiteAlpha.900" spacing={0} align="stretch">
      <Box position={'relative'} height={'full'} width={'full'} overflow={'hidden'}>
        <Geser />
      </Box>
      <Box >
        <Hero />
      </Box>
      <Box width={"auto"} height={"full"}>
        <Features />
      </Box>
    </VStack>
  );
};

export default Home;
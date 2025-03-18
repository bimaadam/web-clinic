"use client";

import { Box, Container, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="blue.700" color="white" py={6}>
      <Container maxW="7xl">
        <Stack spacing={4} textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            Klinik Setia Medika
          </Text>
          <Box height="1px" bg="whiteAlpha.500" my={2} />
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Klinik Setia Medika. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

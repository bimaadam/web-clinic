import { Container, VStack, Text, Box, HStack } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";
import React from "react";

const JadwalPelayanan = () => {
  return (
    <Container id="jadwal" maxW={"7xl"} py={10}>
      <Text
        color={"black"}
        fontSize={"5xl"}
        fontWeight={"bold"}
        textAlign={"center"}
        mb={6}
      >
        Jadwal Pelayanan
      </Text>
      <VStack gap={4} align="stretch">
        <Box bg="green.100" p={5} borderRadius="md">
          <HStack>
            <FaClock size={24} color="green" />
            <Text color={"black"} fontSize={"2xl"} fontWeight={"semibold"}>
              Persalinan 24 Jam
            </Text>
          </HStack>
          <Text color={"gray.700"}>
            Layanan persalinan tersedia 24 jam untuk BPJS / UMUM / KIS.
          </Text>
        </Box>

        <Box bg="blue.100" p={5} borderRadius="md">
          <HStack>
            <FaClock size={24} color="blue" />
            <Text color={"black"} fontSize={"2xl"} fontWeight={"semibold"}>
              Senin - Sabtu
            </Text>
          </HStack>
          <Text color={"gray.700"}>06.00 – 20.00</Text>
        </Box>

        <Box bg="purple.100" p={5} borderRadius="md">
          <HStack>
            <FaClock size={24} color="purple" />
            <Text color={"black"} fontSize={"2xl"} fontWeight={"semibold"}>
              Minggu Pagi
            </Text>
          </HStack>
          <Text color={"gray.700"}>06.00 – 09.00</Text>
        </Box>

        <Box bg="orange.100" p={5} borderRadius="md">
          <HStack>
            <FaClock size={24} color="orange" />
            <Text color={"black"} fontSize={"2xl"} fontWeight={"semibold"}>
              Minggu Sore
            </Text>
          </HStack>
          <Text color={"gray.700"}>16.00 – 20.00</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default JadwalPelayanan;

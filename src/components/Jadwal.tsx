import { Container, VStack, Text, Box, HStack } from "@chakra-ui/react";
import { FaClock, FaCalendarTimes } from "react-icons/fa";
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
              Layanan 24 Jam
            </Text>
          </HStack>
          <Text color={"gray.700"}>
            Pelayanan medis tersedia setiap hari tanpa henti.
          </Text>
        </Box>
        <Box bg="blue.100" p={5} borderRadius="md">
          <HStack>
            <FaClock size={24} color="blue" />
            <Text color={"black"} fontSize={"2xl"} fontWeight={"semibold"}>
              Jadwal Pagi
            </Text>
          </HStack>
          <Text color={"gray.700"}>08.00 - 12.00 (Setiap Hari)</Text>
        </Box>
        <Box bg="purple.100" p={5} borderRadius="md">
          <HStack>
            <FaClock size={24} color="purple" />
            <Text color={"black"} fontSize={"2xl"} fontWeight={"semibold"}>
              Jadwal Sore
            </Text>
          </HStack>
          <Text color={"gray.700"}>15.00 - 19.00 (Setiap Hari)</Text>
        </Box>
        <Box bg="orange.100" p={5} borderRadius="md">
          <HStack>
            <FaClock size={24} color="orange" />
            <Text color={"black"} fontSize={"2xl"} fontWeight={"semibold"}>
              Jadwal Malam
            </Text>
          </HStack>
          <Text color={"gray.700"}>19.30 - 22.00 (Setiap Hari)</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default JadwalPelayanan;

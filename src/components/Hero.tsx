"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW={"7xl"} px={{ base: 4, md: 8 }}>
      <Stack
        align={"center"}
        spacing={{ base: 6, md: 10 }}
        py={{ base: 16, md: 24 }}
        direction={{ base: "column", md: "row" }}
      >
        {/* Teks Section */}
        <Stack
          flex={1}
          spacing={{ base: 4, md: 6 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
            lineHeight={1.2}
            fontWeight={700}
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
            maxW={{ base: "100%", md: "80%" }}
          >
            <Text as={"span"} position={"relative"} color={"blackAlpha.800"}>
              Kesehatan Anda,
            </Text>
            <br />
            <Text as={"span"} color={"blue.700"}>
              Prioritas Utama Kami
            </Text>
          </Heading>
          <Text color={"black"} fontSize={{ base: "md", md: "lg" }}>
            Klinik Setia Medika hadir dengan layanan medis berkualitas, tenaga
            profesional, dan fasilitas modern untuk memastikan kesehatan terbaik
            bagi Anda dan keluarga.
          </Text>
          <Stack
            spacing={4}
            direction={{ base: "column", sm: "row" }}
            justify={{ base: "center", md: "flex-start" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"green"}
              bg={"green.400"}
              _hover={{ bg: "green.500" }}
            >
              Jadwalkan Konsultasi
            </Button>
          </Stack>
        </Stack>

        {/* Image Section */}
        <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
          <Box
            position={"relative"}
            height={{ base: "250px", md: "300px" }}
            width={{ base: "100%", md: "80%" }}
            rounded={"2xl"}
            boxShadow={"2xl"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"/back.jpg"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

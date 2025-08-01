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
  Badge,
  HStack,
  VStack,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box bg="linear-gradient(135deg, #EBF8FF 0%, #F0FFF4 100%)" position="relative">
      <Container maxW={"7xl"} px={{ base: 4, md: 8 }}>
        <Stack
          align={"center"}
          gap={{ base: 8, md: 12 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          {/* Teks Section */}
          <Stack
            flex={1}
            gap={{ base: 6, md: 8 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <VStack align={{ base: "center", md: "flex-start" }} gap={3}>
              <Badge
                colorScheme="blue"
                fontSize="sm"
                px={3}
                py={1}
                rounded="full"
                textTransform="none"
              >
                🩺 Klinik Terpercaya Sejak 2020
              </Badge>
              <Heading
                lineHeight={1.1}
                fontWeight={800}
                fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                color="gray.800"
                textAlign={{ base: "center", md: "left" }}
              >
                <Text as={"span"} color={"blue.600"}>
                  Klinik Setia Medika
                </Text>
                <br />
                <Text as={"span"} color={"green.600"} fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>
                  Kesehatan Keluarga Terpercaya
                </Text>
              </Heading>
            </VStack>
            
            <Text 
              color={"gray.600"} 
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight={1.6}
              maxW="600px"
            >
              Melayani masyarakat Panumbangan, Ciamis, dan sekitarnya dengan 
              layanan kesehatan berkualitas tinggi. Didukung tenaga medis profesional 
              dan fasilitas modern untuk kesehatan optimal keluarga Anda.
            </Text>

            {/* Info Lokasi dan Jam */}
            <VStack align={{ base: "center", md: "flex-start" }} gap={3} color="gray.600">
              <HStack>
                <Text color="red.500" fontSize="lg">📍</Text>
                <Text fontWeight="semibold">Panumbangan, Ciamis, Jawa Barat</Text>
              </HStack>
              <HStack>
                <Text color="blue.500" fontSize="lg">🕐</Text>
                <Text>Buka Setiap Hari • 08:00 - 21:00 WIB</Text>
              </HStack>
              <HStack>
                <Text color="green.500" fontSize="lg">📞</Text>
                <Text>Layanan Darurat 24 Jam</Text>
              </HStack>
            </VStack>
            
            <Stack
              gap={4}
              direction={{ base: "column", sm: "row" }}
              justify={{ base: "center", md: "flex-start" }}
              pt={4}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"600"}
                px={8}
                py={6}
                colorScheme={"blue"}
                bg={"blue.500"}
                _hover={{ bg: "blue.600", transform: "translateY(-2px)" }}
                boxShadow="lg"
                transition="all 0.3s"
              >
                📅 Jadwalkan Konsultasi
              </Button>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"600"}
                px={8}
                py={6}
                variant="outline"
                colorScheme="green"
                borderWidth="2px"
                _hover={{ bg: "green.50", transform: "translateY(-2px)" }}
                transition="all 0.3s"
              >
                👁️ Lihat Layanan
              </Button>
            </Stack>
          </Stack>

          {/* Image Section */}
          <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
            <Box
              position={"relative"}
              height={{ base: "300px", md: "400px" }}
              width={{ base: "100%", md: "90%" }}
              rounded={"3xl"}
              boxShadow={"2xl"}
              overflow={"hidden"}
              border="4px solid white"
              bg="white"
            >
              <Image
                alt={"Klinik Setia Medika - Fasilitas Modern dan Tenaga Medis Profesional"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/back.jpg"}
              />
              {/* Overlay dengan informasi */}
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="linear-gradient(transparent, rgba(0,0,0,0.7))"
                color="white"
                p={6}
              >
                <Text fontSize="lg" fontWeight="bold">
                  🏥 Fasilitas Modern & Tenaga Ahli
                </Text>
                <Text fontSize="sm">
                  ❤️ Melayani dengan sepenuh hati
                </Text>
              </Box>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
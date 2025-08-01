"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Heading,
  Link,
  Button,
  Image
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.900" color="white">
      {/* Main Footer Content */}
      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
          {/* Informasi Klinik */}
          <VStack align="flex-start" gap={4}>
            <HStack>
              <Image
                src="/klinik.jpg"
                alt="Logo Klinik"
                boxSize="200px"
                objectFit="contain"
              />
              <Heading fontSize="xl" color="blue.400">

              </Heading>
            </HStack>
            <Text fontSize="sm" color="gray.300" lineHeight={1.6}>
              Melayani masyarakat Panumbangan, Ciamis dengan layanan kesehatan
              berkualitas tinggi sejak 2020. Komitmen kami adalah kesehatan
              optimal untuk keluarga Anda.
            </Text>
            <HStack gap={3}>
              <Link href="#" _hover={{ color: "blue.400" }}>
                <Text fontSize="xl">📘</Text>
              </Link>
              <Link href="#" _hover={{ color: "pink.400" }}>
                <Text fontSize="xl">📷</Text>
              </Link>
              <Link href="#" _hover={{ color: "green.400" }}>
                <Text fontSize="xl">💬</Text>
              </Link>
            </HStack>
          </VStack>

          {/* Layanan Cepat */}
          <VStack align="flex-start" gap={4}>
            <Heading fontSize="lg" color="white">
              Layanan Utama
            </Heading>
            <VStack align="flex-start" gap={2}>
              <Link href="#" fontSize="sm" color="gray.300" _hover={{ color: "blue.400" }}>
                👨‍⚕️ Konsultasi Dokter
              </Link>
              <Link href="#" fontSize="sm" color="gray.300" _hover={{ color: "blue.400" }}>
                🔬 Laboratorium
              </Link>
              <Link href="#" fontSize="sm" color="gray.300" _hover={{ color: "blue.400" }}>
                💉 Vaksinasi
              </Link>
              <Link href="#" fontSize="sm" color="gray.300" _hover={{ color: "blue.400" }}>
                🚑 Gawat Darurat
              </Link>
              <Link href="#" fontSize="sm" color="gray.300" _hover={{ color: "blue.400" }}>
                👶 Kesehatan Ibu & Anak
              </Link>
              <Link href="#" fontSize="sm" color="gray.300" _hover={{ color: "blue.400" }}>
                🦷 Kesehatan Gigi
              </Link>
            </VStack>
          </VStack>

          {/* Informasi Kontak */}
          <VStack align="flex-start" gap={4}>
            <Heading fontSize="lg" color="white">
              Hubungi Kami
            </Heading>
            <VStack align="flex-start" gap={3}>
              <HStack gap={3}>
                <Text color="red.400" fontSize="lg">📍</Text>
                <Text fontSize="sm" color="gray.300">
                  Jl. Raya Panumbangan<br />
                  Panumbangan, Ciamis<br />
                  Jawa Barat 46268
                </Text>
              </HStack>
              <HStack gap={3}>
                <Text color="green.400" fontSize="lg">📞</Text>
                <Link
                  href="https://wa.me/628522466627"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text fontSize="sm" color="gray.300">
                    +62 852 246 6627
                  </Text>
                </Link>
              </HStack>
              <HStack gap={3}>
                <Text color="blue.400" fontSize="lg">✉️</Text>
                <Link
                  href="mailto:klinikpratamasetiamedika@gmail.com"
                  fontSize="sm"
                  color="gray.300"
                >
                  klinikpratamasetiamedika@gmail.com
                </Link>
              </HStack>
              <HStack gap={3}>
                <Text color="orange.400" fontSize="lg">🕐</Text>
                <Text fontSize="sm" color="gray.300">
                  24 Jam (Gawat Darurat)<br />
                  08:00 - 21:00 (Reguler)
                </Text>
              </HStack>
            </VStack>
          </VStack>

          {/* Call to Action */}
          <VStack align="flex-start" gap={4}>
            <Heading fontSize="lg" color="white">
              Darurat?
            </Heading>
            <Text fontSize="sm" color="gray.300" lineHeight={1.6}>
              Kami siap melayani kondisi darurat 24 jam.
              Jangan ragu untuk menghubungi kami kapan saja.
            </Text>
            <VStack gap={2} w="full">
              <Button
                colorScheme="red"
                size="sm"
                w="full"
              >
                <Text mr={2}>📞</Text>
                Panggil Darurat
              </Button>
              <Button
                colorScheme="green"
                variant="outline"
                size="sm"
                w="full"
              >
                <Text mr={2}>💬</Text>
                WhatsApp
              </Button>
            </VStack>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Divider menggunakan Box */}
      <Box height="1px" bg="gray.700" />

      {/* Bottom Footer */}
      <Container maxW="7xl" py={6}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <HStack>
            <Text color="red.400" fontSize="lg">❤️</Text>
            <Text fontSize="sm" color="gray.400">
              &copy; {new Date().getFullYear()} Klinik Setia Medika.
              Melayani dengan sepenuh hati.
            </Text>
          </HStack>
          <HStack gap={6}>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
              Kebijakan Privasi
            </Link>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
              Syarat & Ketentuan
            </Link>
            <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
              Sitemap
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
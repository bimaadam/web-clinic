"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useColorModeValue } from "./ui/color-mode";

interface FeatureProps {
  title: string;
  description: string;
  emoji: string;
  iconBg: string;
  iconColor: string;
}

const Feature = ({ title, description, emoji, iconBg, iconColor }: FeatureProps) => {
  return (
    <VStack
      bg="white"
      p={8}
      rounded="xl"
      boxShadow="lg"
      border="1px solid"
      borderColor="gray.100"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
        borderColor: "blue.200"
      }}
      transition="all 0.3s"
      align="flex-start"
      gap={4}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
        boxShadow="md"
      >
        <Text fontSize="2xl">{emoji}</Text>
      </Flex>
      <VStack align="flex-start" gap={2}>
        <Text fontWeight={700} fontSize="xl" color="gray.800">
          {title}
        </Text>
        <Text color="gray.600" fontSize="md" lineHeight={1.6}>
          {description}
        </Text>
      </VStack>
    </VStack>
  );
};

export default function Features() {
  const features = [
    {
      title: "Konsultasi Dokter Spesialis",
      description: "Tim dokter spesialis berpengalaman siap memberikan konsultasi dan penanganan terbaik untuk berbagai kondisi kesehatan.",
      emoji: "👨‍⚕️",
      iconBg: "blue.100",
      iconColor: "blue.500"
    },
    {
      title: "Layanan Gawat Darurat",
      description: "Siap melayani kondisi darurat 24 jam dengan tim medis yang standby dan fasilitas lengkap.",
      emoji: "🚑",
      iconBg: "red.100",
      iconColor: "red.500"
    },
    {
      title: "Laboratorium Lengkap",
      description: "Pemeriksaan laboratorium dengan teknologi modern dan hasil yang akurat untuk diagnosis yang tepat.",
      emoji: "🔬",
      iconBg: "purple.100",
      iconColor: "purple.500"
    },
    {
      title: "Perawatan Komprehensif",
      description: "Layanan perawatan menyeluruh dari pencegahan hingga pengobatan dengan pendekatan holistik.",
      emoji: "❤️",
      iconBg: "pink.100",
      iconColor: "pink.500"
    },
    {
      title: "Pelayanan 24 Jam",
      description: "Kami siap melayani Anda kapan saja dengan sistem jaga yang terorganisir dengan baik.",
      emoji: "🕐",
      iconBg: "green.100",
      iconColor: "green.500"
    },
    {
      title: "Standar Keamanan Tinggi",
      description: "Menerapkan protokol kesehatan dan keamanan internasional untuk kenyamanan dan keselamatan pasien.",
      emoji: "🛡️",
      iconBg: "orange.100",
      iconColor: "orange.500"
    }
  ];

  return (
    <Box bg="gray.50" py={20}>
      <Container maxW={"7xl"}>
        {/* Header Section */}
        <VStack gap={6} textAlign="center" mb={16}>
          <HStack>
            <Text fontSize="2xl">🩺</Text>
            <Text
              textTransform={"uppercase"}
              color={"blue.500"}
              fontWeight={700}
              fontSize={"lg"}
              letterSpacing="wider"
            >
              Keunggulan Kami
            </Text>
          </HStack>
          <Heading 
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={800}
            color="gray.800"
            maxW="800px"
            lineHeight={1.2}
          >
            Mengapa Memilih{" "}
            <Text as="span" color="blue.600">
              Klinik Setia Medika
            </Text>
            ?
          </Heading>
          <Text 
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            maxW="600px"
            lineHeight={1.6}
          >
            Kami berkomitmen memberikan pelayanan kesehatan terbaik dengan 
            standar internasional untuk masyarakat Panumbangan dan sekitarnya.
          </Text>
        </VStack>

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              emoji={feature.emoji}
              iconBg={feature.iconBg}
              iconColor={feature.iconColor}
            />
          ))}
        </SimpleGrid>

        {/* Bottom CTA Section */}
        <Box
          mt={16}
          bg="linear-gradient(135deg, #3182CE 0%, #38A169 100%)"
          rounded="2xl"
          p={12}
          textAlign="center"
          color="white"
        >
          <VStack gap={6}>
            <Text fontSize="4xl">🤝</Text>
            <Heading fontSize={{ base: "2xl", md: "3xl" }}>
              Kesehatan Anda, Prioritas Kami
            </Heading>
            <Text fontSize="lg" maxW="500px" opacity={0.9}>
              Tim medis profesional kami siap memberikan pelayanan terbaik 
              untuk kesehatan dan kesejahteraan keluarga Anda.
            </Text>
            <HStack gap={8} flexWrap="wrap" justify="center">
              <VStack>
                <Text fontSize="3xl" fontWeight="bold">500+</Text>
                <Text fontSize="sm" opacity={0.8}>Pasien Terlayani</Text>
              </VStack>
              <VStack>
                <Text fontSize="3xl" fontWeight="bold">24/7</Text>
                <Text fontSize="sm" opacity={0.8}>Layanan Darurat</Text>
              </VStack>
              <VStack>
                <Text fontSize="3xl" fontWeight="bold">5+</Text>
                <Text fontSize="sm" opacity={0.8}>Tahun Pengalaman</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
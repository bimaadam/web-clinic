import { 
  Container, 
  Text, 
  VStack, 
  Box, 
  SimpleGrid,
  Heading,
  HStack,
  Button,
  Flex
} from "@chakra-ui/react";

interface LayananItemProps {
  title: string;
  description: string;
  emoji: string;
  color: string;
  bgColor: string;
  features: string[];
}

const LayananItem = ({ title, description, emoji, color, bgColor, features }: LayananItemProps) => {
  return (
    <Box
      bg="white"
      p={8}
      borderRadius="xl"
      boxShadow="lg"
      border="1px solid"
      borderColor="gray.100"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
        borderColor: color
      }}
      transition="all 0.3s"
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top={0}
        right={0}
        w="100px"
        h="100px"
        bg={bgColor}
        opacity={0.1}
        borderRadius="full"
        transform="translate(30px, -30px)"
      />
      
      <VStack align="flex-start" gap={4}>
        <Flex
          w={16}
          h={16}
          align="center"
          justify="center"
          bg={bgColor}
          color={color}
          borderRadius="xl"
          boxShadow="md"
        >
          <Text fontSize="2xl">{emoji}</Text>
        </Flex>
        
        <VStack align="flex-start" gap={3} w="full">
          <Heading fontSize="xl" color="gray.800" fontWeight={700}>
            {title}
          </Heading>
          <Text color="gray.600" fontSize="md" lineHeight={1.6}>
            {description}
          </Text>
          
          <VStack align="flex-start" gap={2} w="full">
            {features.map((feature, index) => (
              <HStack key={index} gap={2}>
                <Box w={2} h={2} bg={color} borderRadius="full" />
                <Text fontSize="sm" color="gray.600">{feature}</Text>
              </HStack>
            ))}
          </VStack>
          
          <Button
            size="sm"
            variant="ghost"
            colorScheme={color.split('.')[0]}
            mt={2}
            _hover={{ bg: bgColor }}
          >
            Pelajari Lebih Lanjut
            <Text ml={2}>→</Text>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

const Layanan = () => {
  const layananData = [
    {
      title: "Konsultasi Dokter Umum",
      description: "Pemeriksaan kesehatan menyeluruh dan konsultasi dengan dokter umum berpengalaman untuk berbagai keluhan kesehatan.",
      emoji: "👨‍⚕️",
      color: "blue.500",
      bgColor: "blue.50",
      features: [
        "Pemeriksaan fisik lengkap",
        "Konsultasi kesehatan keluarga",
        "Rujukan ke spesialis jika diperlukan",
        "Resep obat dan terapi"
      ]
    },
    {
      title: "Laboratorium & Diagnostik",
      description: "Pemeriksaan laboratorium lengkap dengan teknologi modern dan hasil yang akurat untuk mendukung diagnosis.",
      emoji: "🔬",
      color: "green.500",
      bgColor: "green.50",
      features: [
        "Tes darah lengkap",
        "Tes urine dan feses",
        "Tes gula darah & kolesterol",
        "Hasil cepat dan akurat"
      ]
    },
    {
      title: "Layanan Vaksinasi",
      description: "Program vaksinasi lengkap untuk bayi, anak, dewasa, dan lansia sesuai dengan jadwal imunisasi yang direkomendasikan.",
      emoji: "💉",
      color: "purple.500",
      bgColor: "purple.50",
      features: [
        "Vaksin anak lengkap",
        "Vaksin dewasa & lansia",
        "Vaksin perjalanan",
        "Konsultasi jadwal imunisasi"
      ]
    },
    {
      title: "Gawat Darurat 24 Jam",
      description: "Layanan medis darurat yang siap melayani 24 jam dengan tim medis yang standby dan fasilitas lengkap.",
      emoji: "🚑",
      color: "red.500",
      bgColor: "red.50",
      features: [
        "Tim medis 24/7",
        "Ambulans siaga",
        "Penanganan trauma",
        "Stabilisasi pasien kritis"
      ]
    },
    {
      title: "Pemeriksaan Jantung",
      description: "Pemeriksaan kesehatan jantung dengan EKG dan konsultasi kardiologi untuk deteksi dini penyakit jantung.",
      emoji: "❤️",
      color: "pink.500",
      bgColor: "pink.50",
      features: [
        "EKG (Elektrokardiogram)",
        "Konsultasi kardiologi",
        "Cek tekanan darah",
        "Program jantung sehat"
      ]
    },
    {
      title: "Pemeriksaan Mata",
      description: "Layanan pemeriksaan mata lengkap untuk deteksi gangguan penglihatan dan kesehatan mata secara menyeluruh.",
      emoji: "👁️",
      color: "cyan.500",
      bgColor: "cyan.50",
      features: [
        "Tes ketajaman penglihatan",
        "Pemeriksaan refraksi",
        "Deteksi glaukoma",
        "Konsultasi kesehatan mata"
      ]
    },
    {
      title: "Kesehatan Ibu & Anak",
      description: "Layanan kesehatan khusus untuk ibu hamil, persalinan, dan perawatan kesehatan anak dari bayi hingga remaja.",
      emoji: "👶",
      color: "orange.500",
      bgColor: "orange.50",
      features: [
        "Pemeriksaan kehamilan",
        "USG kehamilan",
        "Imunisasi anak",
        "Konsultasi tumbuh kembang"
      ]
    },
    {
      title: "Kesehatan Gigi & Mulut",
      description: "Perawatan gigi dan mulut lengkap dengan dokter gigi berpengalaman untuk menjaga kesehatan oral Anda.",
      emoji: "🦷",
      color: "yellow.600",
      bgColor: "yellow.50",
      features: [
        "Pemeriksaan gigi rutin",
        "Pembersihan karang gigi",
        "Tambal gigi",
        "Konsultasi kesehatan mulut"
      ]
    }
  ];

  return (
    <Box bg="white" py={20}>
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
              Layanan Kesehatan
            </Text>
          </HStack>
          <Heading 
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={800}
            color="gray.800"
            maxW="800px"
            lineHeight={1.2}
          >
            Layanan Medis{" "}
            <Text as="span" color="blue.600">
              Terlengkap
            </Text>{" "}
            untuk Keluarga
          </Heading>
          <Text 
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            maxW="600px"
            lineHeight={1.6}
          >
            Kami menyediakan berbagai layanan kesehatan berkualitas tinggi 
            dengan teknologi modern dan tenaga medis profesional.
          </Text>
        </VStack>

        {/* Services Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {layananData.map((layanan, index) => (
            <LayananItem
              key={index}
              title={layanan.title}
              description={layanan.description}
              emoji={layanan.emoji}
              color={layanan.color}
              bgColor={layanan.bgColor}
              features={layanan.features}
            />
          ))}
        </SimpleGrid>

        {/* Bottom CTA */}
        <Box
          mt={16}
          bg="linear-gradient(135deg, #2B6CB0 0%, #2F855A 100%)"
          rounded="2xl"
          p={12}
          textAlign="center"
          color="white"
        >
          <VStack gap={6}>
            <Heading fontSize={{ base: "2xl", md: "3xl" }}>
              Butuh Konsultasi Segera?
            </Heading>
            <Text fontSize="lg" maxW="500px" opacity={0.9}>
              Tim medis kami siap membantu Anda 24/7. 
              Jangan tunda kesehatan Anda!
            </Text>
            <HStack gap={4} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                bg="white"
                color="blue.600"
                _hover={{ bg: "gray.100" }}
                fontWeight="600"
              >
                📞 Hubungi Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                fontWeight="600"
              >
                📅 Jadwal Online
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Layanan;
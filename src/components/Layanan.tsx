import { Container, Text, VStack, Box } from "@chakra-ui/react"

const Layanan = () => {
    return (
        <Container maxW={"7xl"} py={10}>
            <Text color={'black'} fontSize={"5xl"} fontWeight={'bold'} textAlign={'center'} mb={6}>
                Layanan Kami
            </Text>
            <VStack spacing={4} align="stretch">
                <Box bg="blue.100" p={5} borderRadius="md">
                    <Text color={'blue.700'} fontSize={'2xl'} fontWeight={'semibold'}>
                        Konsultasi Dokter
                    </Text>
                    <Text color={'gray.700'}>Pemeriksaan dan konsultasi dengan dokter umum & spesialis.</Text>
                </Box>
                <Box bg="green.100" p={5} borderRadius="md">
                    <Text color={'green.700'} fontSize={'2xl'} fontWeight={'semibold'}>
                        Pemeriksaan Laboratorium
                    </Text>
                    <Text color={'gray.700'}>Cek darah, urine, dan pemeriksaan lainnya dengan hasil cepat.</Text>
                </Box>
                <Box bg="purple.100" p={5} borderRadius="md">
                    <Text color={'purple.700'} fontSize={'2xl'} fontWeight={'semibold'}>
                        Layanan Vaksinasi
                    </Text>
                    <Text color={'gray.700'}>Vaksinasi untuk anak, dewasa, dan lansia sesuai kebutuhan.</Text>
                </Box>
                <Box bg="orange.100" p={5} borderRadius="md">
                    <Text color={'orange.700'} fontSize={'2xl'} fontWeight={'semibold'}>
                        Pelayanan Gawat Darurat
                    </Text>
                    <Text color={'gray.700'}>Layanan medis darurat 24 jam untuk kondisi mendesak.</Text>
                </Box>
            </VStack>
        </Container>
    )
}

export default Layanan

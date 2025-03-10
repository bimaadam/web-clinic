"use client";

import { Box, Flex, Link, Spacer, Button, HStack, Image, Text } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Box bg="blue.900" px={4} py={3} color="white" shadow="md">
            <Flex align="center" maxW="1200px" mx="auto">
                <Link href="/" fontSize="xl" fontWeight="bold">
                    <HStack>
                        <Image src="/logo-klinik.png" alt="Logo" width="50px" height="50px" shadowColor={"green.200"} />
                        <Text fontSize="medium" fontWeight="bold">Klinik Setia Medika</Text>
                    </HStack>
                </Link>
                <Spacer />
                <Flex gap={4}>
                    <Link href="/" _hover={{ textDecoration: "underline" }}>
                        Home</Link>
                    <Link href="#layanan" _hover={{ textDecoration: "underline" }}>
                        Layanan
                    </Link>
                    <Link href="#jadwal" _hover={{ textDecoration: "underline" }}>
                        Jadwal
                    </Link>
                    <Link href="#kontak" _hover={{ textDecoration: "underline" }}>
                        Kontak
                    </Link>
                    <Link href="/blog" _hover={{ textDecoration: "underline" }}>
                        Blog
                    </Link>
                    <Button
                        bg="green.400"
                        _hover={{
                            bg: 'green.500',
                            boxShadow: 'md',
                            transform: 'scale(1.05)',
                            transition: 'all 0.2s ease-in-out'
                        }}>
                        Daftar Online
                    </Button>
                </Flex>
            </Flex>
        </Box >
    );
};

export default Navbar;

"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  HStack,
  Image,
  Text,
  IconButton,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa"; // Pakai react-icons buat hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box bg="blue.900" px={4} py={3} color="white" shadow="md">
      <Flex align="center" maxW="1200px" mx="auto" justify="space-between">
        {/* Logo */}
        <Link href="/" fontSize="xl" fontWeight="bold">
          <HStack>
            <Image
              src="/logo-klinik.png"
              alt="Logo"
              width="50px"
              height="50px"
            />
            <Text fontSize="medium" fontWeight="bold">
              Klinik Setia Medika
            </Text>
          </HStack>
        </Link>

        {/* Desktop Navigation */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Link href="/" _hover={{ textDecoration: "underline" }}>
            Home
          </Link>
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
              bg: "green.500",
              boxShadow: "md",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            Daftar Online
          </Button>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open Menu"
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          color="white"
          _hover={{ bg: "blue.800" }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Flex>

      {/* Mobile Navigation */}
      {isOpen && (
        <VStack
          bg="blue.800"
          spacing={4}
          p={4}
          display={{ base: "flex", md: "none" }}
          align="stretch"
        >
          <Link href="/" _hover={{ textDecoration: "underline" }}>
            Home
          </Link>
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
            w="full"
            _hover={{
              bg: "green.500",
              boxShadow: "md",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            Daftar Online
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;

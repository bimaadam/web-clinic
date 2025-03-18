"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { IoHeart, IoMedical, IoSearchSharp } from "react-icons/io5";
import { ReactElement } from "react";
import { useColorModeValue } from "./ui/color-mode";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Container maxW={"7xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
        <Stack gap={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Misi Kami
          </Text>
          <Heading color={"black"}>
            Penyedia layanan kesehatan dan kesejahteraan
          </Heading>
          <Text color={"black"} fontSize={"lg"}>
            Kami berdedikasi untuk memberikan standar perawatan tertinggi dan
            mempromosikan gaya hidup sehat bagi semua orang.
          </Text>
          <Stack color={"black"} gap={4} divideY="2px">
            <Feature
              icon={<Icon as={IoHeart} color={"red.500"} w={5} h={5} />}
              iconBg={useColorModeValue("red.100", "red.900")}
              text={"Perawatan Pasien"}
            />
            <Feature
              icon={<Icon as={IoMedical} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Layanan Medis"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Riset Kesehatan"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"gambar layanan kesehatan"}
            src={
              "https://images.unsplash.com/photo-1574158622684-0a0b75d4cfad?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDE0fHxoZWFsdGglMjBjYXJlJTIwdG9wZXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

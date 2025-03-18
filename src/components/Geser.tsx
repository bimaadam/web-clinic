"use client";

import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Geser() {
  const [slider, setSlider] = useState<Slider | null>(null); // React udah dideclare otomatis

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const Igd = [
    {
      title: "Layanan Gawat Darurat",
      text: "Klinik kami menyediakan layanan medis gawat darurat 24/7 untuk menangani masalah kesehatan mendesak. Kesehatan Anda adalah prioritas kami.",
      image: "3.jpg",
    },
  ];

  const cards = [
    {
      title: "Layanan Konsultasi",
      text: "Klinik kami menawarkan layanan konsultasi lengkap untuk membantu Anda menjaga kesehatan. Jadwalkan janji temu dengan dokter ahli kami.",
      image: "1.jpg",
    },
    {
      title: "Pemeriksaan Kesehatan",
      text: "Lakukan pemeriksaan kesehatan menyeluruh untuk memastikan kondisi tubuh Anda tetap prima. Klinik kami menyediakan pemeriksaan rutin yang disesuaikan dengan kebutuhan Anda.",
      image: "2.jpg",
    },
  ];

  return (
    <Box
      maxW={"max-content"}
      position={"relative"}
      height={"850px"}
      width={"auto"}
      overflow={"hidden"}
    >
      {/* Tambahin CSS buat Slider */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Tombol Navigasi */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        color={"black"}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        color={"black"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(s) => setSlider(s)}>
        {Igd.concat(cards).map((item, index) => (
          <Box
            key={index}
            height={"4xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundColor={"blackAlpha.500"}
            backgroundBlendMode={"multiply"}
            backgroundImage={`url(${item.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                color={"white"}
                gap={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  backgroundColor={
                    Igd.some((igdItem) => igdItem.title === item.title)
                      ? "red.700"
                      : "blue.900"
                  }
                  rounded={"2xl"}
                  padding={"5"}
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                >
                  {item.title}
                </Heading>
                <Text
                  padding={"4"}
                  backgroundColor={"blackAlpha.400"}
                  rounded={"2xl"}
                  fontSize={{ base: "md", lg: "lg" }}
                  color="white"
                >
                  {item.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

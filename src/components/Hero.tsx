'use client'

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
} from '@chakra-ui/react'

export default function Hero() {
    return (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            color={"blackAlpha.800"}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'black',
                                zIndex: -1,
                            }}>
                            Selamat datang di
                        </Text>
                        <br />
                        <Text as={'span'} color={'blue.700'}>
                            Klinik Setia Medika
                        </Text>
                    </Heading>
                    <Text color={'black'}>
                        Kami hadir untuk memberikan layanan kesehatan terbaik untuk Anda dan keluarga, dengan pendekatan yang profesional dan penuh perhatian.
                    </Text>
                    <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'green'}
                            bg={'green.400'}
                            _hover={{ bg: 'green.500' }}>
                            Pelajari Lebih Lanjut
                        </Button>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                        >
                            Cara Kerja
                        </Button>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>

                    <Box
                        position={'relative'}
                        height={'300px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}>
                        <IconButton
                            aria-label={'Play Button'}
                            variant={'ghost'}
                            _hover={{ bg: 'transparent' }}

                            size={'lg'}
                            color={'white'}
                            position={'absolute'}
                            left={'50%'}
                            top={'50%'}
                            transform={'translateX(-50%) translateY(-50%)'}
                        />
                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                                '/back.jpg'
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container >
    )
}

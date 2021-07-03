import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import './styles.module.css';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination]);

export function Slider() {
  return (
    <Swiper navigation={true} pagination={{ clickable: true }}>
      <SwiperSlide>
        <Link href="/europa" passHref>
          <Stack
            justify="center"
            spacing="4"
            h="450"
            bgImage="/europa.png"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            cursor="pointer"
          >
            <Heading as="h2" color="gray.50">
              Europa
            </Heading>
            <Text fontSize="24px" fontWeight="bold" color="gray.100">
              O continente mais antigo.
            </Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

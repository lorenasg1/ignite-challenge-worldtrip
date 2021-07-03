import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { Card } from '../components/Card';
import { ContinentBanner } from '../components/ContinentBanner';
import { Header } from '../components/Header';

export default function Europa() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box p="0" w="100%" m="0">
      <Header />
      <ContinentBanner />

      <Stack
        direction={isWideVersion ? 'row' : 'column'}
        my="20"
        justify="space-between"
        px={['6', '6', '24']}
      >
        <Text w={['100%', '100%', '50%']} maxWidth={600} textAlign="justify">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Stack
          direction="row"
          align="center"
          justify="space-between"
          w={['100%', '100%', '50%']}
          py={['1px', '6', '6']}
        >
          <Flex direction="column">
            <Text
              fontWeight="600"
              fontSize={['24', '24', '48']}
              color="yellow.400"
            >
              50
            </Text>
            <Text>países</Text>
          </Flex>
          <Flex direction="column">
            <Text
              fontWeight="600"
              fontSize={['24', '24', '48']}
              color="yellow.400"
            >
              60
            </Text>
            <Text>línguas</Text>
          </Flex>
          <Flex direction="column">
            <Text
              fontWeight="600"
              fontSize={['24', '24', '48']}
              color="yellow.400"
            >
              27
            </Text>
            <Text>cidades +100</Text>
          </Flex>
        </Stack>
      </Stack>

      <Heading
        mb="4"
        px={['6', '6', '24']}
        fontSize="36"
        as="h2"
        fontWeight="500"
      >
        Cidades +100
      </Heading>

      <Flex px="24" justify="space-between" flexWrap="wrap">
        <Card
          image="/card_london.png"
          city="Londres"
          country="Reino Unido"
          icon="/flag_uk.svg"
        />
        <Card
          image="/card_paris.png"
          city="Paris"
          country="França"
          icon="/flag_french.svg"
        />
        <Card
          image="/card_roma.png"
          city="Roma"
          country="Itália"
          icon="/flag_italy.png"
        />
        <Card
          image="/card_praga.png"
          city="Praga"
          country="República Tcheca"
          icon="/flag_rtcheca.png"
        />
        <Card
          image="/card_amsterda.png"
          city="Amsterdã"
          country="Holanda"
          icon="/flag_holanda.png"
        />
      </Flex>
    </Box>
  );
}

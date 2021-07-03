import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { TravelType } from '../components/TravelType';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Container p="0" mb="10" maxWidth="100%" align="center">
      <Header />
      <Banner />

      {!isWideVersion ? (
        <Flex px="24" p="20" w="100%" justify="center">
          <UnorderedList>
            <Stack direction="row" spacing="100">
              <Box>
                <ListItem>vida noturna</ListItem>
                <ListItem>moderno</ListItem>
              </Box>
              <Flex direction="column" align="flex-end">
                <ListItem>praia</ListItem>
                <ListItem>clássico</ListItem>
              </Flex>
            </Stack>
            <ListItem>e mais...</ListItem>
          </UnorderedList>
        </Flex>
      ) : (
        <Flex px="24" p="20" justify="space-between">
          <TravelType image="/cocktail.svg">vida noturna</TravelType>
          <TravelType image="/surf.svg">praia</TravelType>
          <TravelType image="/building.svg">moderno</TravelType>
          <TravelType image="/museum.svg">clássico</TravelType>
          <TravelType image="/earth.svg">e mais...</TravelType>
        </Flex>
      )}

      <Divider w="20" mb="10" border="1px" borderColor="gray.600" />
      <Heading as="h2" size="lg" fontWeight="400" lineHeight="1.5" mb="10">
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <Slider />
    </Container>
  );
}

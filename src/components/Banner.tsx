import {
  Flex,
  Spacer,
  Image,
  Heading,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react';

export function Banner() {
  return (
    <>
      <Stack direction="row" w="100%" h={335} my="0" mx="auto">
        <Flex
          px={['20', '20', '24']}
          bgImage="url('/banner.png')"
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="cover"
          w="100%"
          h="100%"
          align="center"
        >
          <Stack direction="column" spacing="4" textAlign="left">
            <Heading as="h1" size="lg" fontWeight="500" color="gray.50">
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>

            <Text color="gray.100">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>

          <Spacer />
          <Box pt="14" w={417.15} h={270.74}>
            <Image src="/airplane.svg" alt="" />
          </Box>
        </Flex>
      </Stack>
    </>
  );
}

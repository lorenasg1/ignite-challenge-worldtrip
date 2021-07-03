import {
  Flex,
  Spacer,
  Image,
  Heading,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <>
      <Stack direction="row" w="100%" h={500} my="0" mx="auto">
        <Flex
          px={['20', '20', '24']}
          bgImage="url('/europa2.png')"
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="cover"
          w="100%"
          h="100%"
          align="center"
        >
          <Heading
            alignSelf="flex-end"
            as="h1"
            size="lg"
            fontWeight="500"
            color="gray.50"
            mb="16"
          >
            Europa
          </Heading>
        </Flex>
      </Stack>
    </>
  );
}

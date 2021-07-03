import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';

interface CardProps {
  image: string;
  city: string;
  country: string;
  icon: string;
}

export function Card({ image, city, country, icon }: CardProps) {
  return (
    <Flex direction="column" w={256} my="6">
      <Box w="100%" h={173} bgImage={image} alt="" />
      <Flex
        py="6"
        px="6"
        align="center"
        justify="space-between"
        border="1px"
        borderTop="none"
        borderColor="yellow.400"
      >
        <Stack direction="column">
          <Text fontWeight="600" fontSize={20}>
            {city}
          </Text>
          <Text fontWeight="500" fontSize={16} color="gray.300">
            {country}
          </Text>
        </Stack>
        <Image src={icon} w={30} h={30} />
      </Flex>
    </Flex>
  );
}

import { Image, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

interface TravelTypeProps {
  image: string;
  children: string;
}

export function TravelType({ image, children }: TravelTypeProps) {
  return (
    <VStack>
      <Image src={image} alt="" />
      <Text>{children}</Text>
    </VStack>
  );
}

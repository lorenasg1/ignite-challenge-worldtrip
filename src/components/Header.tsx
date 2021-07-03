import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../../public/logo.svg';

export function Header() {
  return (
    <Flex as="header" h={100} w="100%" align="center" justify="center">
      <Link href="/">
        <Image src={logoImg} alt="world trip" />
      </Link>
    </Flex>
  );
}

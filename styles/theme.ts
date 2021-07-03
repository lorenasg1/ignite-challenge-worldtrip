import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '600': '#47585b',
      '300': '#999',
      '100': '#dadada',
      '50': '#f5f8fa',
    },
    yellow: {
      '400': '#ffba08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.600',
      },
    },
  },
});

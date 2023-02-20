import { Box, Stack } from '@chakra-ui/react';

import { PaginantionItem } from './PaginationItem';

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      mt={8}
      justify={'space-between'}
      align={'center'}
      spacing={6}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction={'row'} spacing={2}>
        <PaginantionItem number={1} isCurrent={true} />
        <PaginantionItem number={2} />
        <PaginantionItem number={3} />
        <PaginantionItem number={4} />
        <PaginantionItem number={5} />
      </Stack>
    </Stack>
  );
}
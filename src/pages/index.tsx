import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex w={'100vw'} h={'100vh'} align={'center'} justify={'center'}>
      <Flex
        p={8}
        w={'100%'}
        maxW={360}
        as={'form'}
        bg={'gray.800'}
        borderRadius={8}
        flexDir={'column'}
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              size={'lg'}
              name="email"
              id="email"
              type={'email'}
              variant={'filled'}
              _hover={{
                bgColor: 'gray.900',
              }}
              bgColor={'gray.900'}
              focusBorderColor={'pink.500'}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              size={'lg'}
              name="password"
              id="password"
              type={'password'}
              variant={'filled'}
              _hover={{
                bgColor: 'gray.900',
              }}
              bgColor={'gray.900'}
              focusBorderColor={'pink.500'}
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt={6} colorScheme={'pink'} size={'lg'}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

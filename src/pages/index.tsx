import { Button, Flex, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  async function handleSignIn(data: SignInFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            label={'E-mail'}
            type={'email'}
            name={'email'}
            error={errors.email!}
            reg={register}
          />
          <Input
            label={'Senha'}
            type={'password'}
            name={'password'}
            error={errors.password!}
            reg={register}
          />
        </Stack>

        <Button
          type="submit"
          mt={6}
          colorScheme={'pink'}
          size={'lg'}
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

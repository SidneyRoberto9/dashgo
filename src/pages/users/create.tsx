import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf(['', yup.ref('password')], 'As senhas precisam ser iguais'),
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  async function handleCreateNewUser(data: CreateUserFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Box>
      <Header />
      <Flex w={'100%'} my={'6'} maxW={1480} mx={'auto'} px={'6'}>
        <Sidebar />

        <Box
          as={'form'}
          flex={'1'}
          borderRadius={8}
          bg={'gray.800'}
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateNewUser)}
        >
          <Heading size={'lg'} fontWeight={'normal'}>
            Criar Usuario
          </Heading>

          <Divider my={'6'} borderColor={'gray.700'} />

          <VStack spacing={'8'}>
            <SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w={'100%'}>
              <Input
                name="name"
                label="Nome completo"
                type={'text'}
                error={errors.name!}
                reg={register}
              />
              <Input
                name="email"
                label="E-mail"
                type={'email'}
                error={errors.email!}
                reg={register}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w={'100%'}>
              <Input
                name="password"
                label="Senha"
                type={'password'}
                error={errors.password}
                reg={register}
              />
              <Input
                name="password_confirmation"
                label="Confirmação da Senha"
                type={'password'}
                error={errors.password_confirmation}
                reg={register}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={'8'} justify={'flex-end'}>
            <HStack spacing={'4'}>
              <Link href={'/users'}>
                <Button colorScheme={'whiteAlpha'}>Cancelar</Button>
              </Link>
              <Button
                type={'submit'}
                isLoading={isSubmitting}
                colorScheme={'pink'}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

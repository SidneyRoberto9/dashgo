import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  reg: UseFormRegister<any>;
  label?: string;
  error?: FieldError;
}

export function Input({
  name,
  label,
  reg,
  error = undefined,
  ...rest
}: InputProps) {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        type={'email'}
        size={'lg'}
        variant={'filled'}
        _hover={{
          bgColor: 'gray.900',
        }}
        bgColor={'gray.900'}
        focusBorderColor={'pink.500'}
        {...rest}
        {...reg(name)}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}

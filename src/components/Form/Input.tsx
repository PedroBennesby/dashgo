import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChrakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChrakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, type, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{ bgColor: 'gray.900' }}
        size='lg'
        {...rest}
      ></ChakraInput>
    </FormControl>
  );
}

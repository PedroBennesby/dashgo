import { Avatar, Flex, Box, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Pedro Bennesby</Text>
        <Text color='gray.300' fontSize='small'>
          pedrobennesby@gmail.com
        </Text>
      </Box>

      <Avatar size='md' name='Pedro Bennesby' />
    </Flex>
  );
}

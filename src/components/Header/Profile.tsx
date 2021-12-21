import { Avatar, Flex, Box, Text } from '@chakra-ui/react';

interface profileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: profileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Pedro Bennesby</Text>
          <Text color='gray.300' fontSize='small'>
            pedrobennesby@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Pedro Bennesby' />
    </Flex>
  );
}

import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return(
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Victoria Ferreira</Text>
            <Text color="gray.300" fontSize="small">victoria@gmail.com</Text>
          </Box>

          <Avatar size="md" name="Victoria Ferreira" src="https://img.estadao.com.br/thumbs/640/resources/jpg/8/5/1540830821858.jpg">

          </Avatar>
        </Flex>
    );
}
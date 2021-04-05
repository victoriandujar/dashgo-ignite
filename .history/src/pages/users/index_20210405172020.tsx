import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine } from "react-icons/ri";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="20">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
              cursor="pointer"
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
              <Thead>
                  <Tr>
                    <Th px="6" color="gray.300" with="8">
                        <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    <Th>Data de Cadastro</Th>
                  </Tr>
              </Thead>
              <Tbody>
                  <Tr>
                      <Td px="6">
                      <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                          <Box>
                              <Text fontWeight="bold">Victoria Ferreira</Text>
                              <Text fontSize="sm" color="gray.300">victoria@gmail.com</Text>
                          </Box>
                      </Td>
                  </Tr>
              </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}

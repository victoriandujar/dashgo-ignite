import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavSections } from "./NavSections";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSections title="GERAL">
          <Link display="flex" align="center">
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text ml="4" fontSize="medium">
              Dashboard
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiContactsLine} fontSize="20" />
            <Text ml="4" fontSize="medium">
              Usuários
            </Text>
          </Link>
        </NavSections>

        <NavSections title="AUTOMAÇÃO">
          <Link display="flex" align="center">
            <Icon as={RiInputMethodLine} fontSize="20" />
            <Text ml="4" fontSize="medium">
              Formulário
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiGitMergeLine} fontSize="20" />
            <Text ml="4" fontSize="medium">
              Automação
            </Text>
          </Link>
        </NavSections>
      </Stack>
    </Box>
  );
}

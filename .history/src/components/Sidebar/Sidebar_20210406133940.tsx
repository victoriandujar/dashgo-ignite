import { Box, Stac } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavSections } from "./NavSections";
import { NavLinks } from "./NavLinks";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSections title="GERAL">
          <NavLinks icon={RiDashboardLine}>Dashboard</NavLinks>
          <NavLinks icon={RiContactsLine}>Usuários</NavLinks>
        </NavSections>

        <NavSections title="AUTOMAÇÃO">
          <NavLinks icon={RiInputMethodLine}>Formulário</NavLinks>
          <NavLinks icon={RiGitMergeLine}>Automação</NavLinks>
        </NavSections>
      </Stack>
    </Box>
  );
}

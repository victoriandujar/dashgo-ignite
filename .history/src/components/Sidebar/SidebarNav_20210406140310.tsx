import { Stack } from "@chakra-ui/react";
import { NavSections } from "./NavSections";
import { NavLinks } from "./NavLinks";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

export function SidebarNav() {
  return (
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
  );
}

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
        <NavLinks icon={RiDashboardLine} href="/dashboard">Dashboard</NavLinks>
        <NavLinks icon={RiContactsLine} href="/users">Usuários</NavLinks>
      </NavSections>

      <NavSections title="AUTOMAÇÃO">
        <NavLinks icon={RiInputMethodLine} href="/forms">Formulário</NavLinks>
        <NavLinks icon={RiGitMergeLine} href="/automation">Automação</NavLinks>
      </NavSections>
    </Stack>
  );
}

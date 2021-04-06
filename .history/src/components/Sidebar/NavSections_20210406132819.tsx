import { Box, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";

export function NavSections() {
    return(
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Geral
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
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
          </Stack>
        </Box>
    );
}
import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinksProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

import Link from "next/link";

interface NavLinksProps extends ChakraLinksProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLinks({ icon, children, href, ...rest }: NavLinksProps) {
  return (
    <Link href={href}>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontSize="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}

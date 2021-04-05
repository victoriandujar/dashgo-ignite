import { Stack, Button } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      spacing="6"
      align="center"
    >
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        1
      </Button>

      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{ bg: "gray.500" }}
      >
        2
      </Button>
    </Stack>
  );
}

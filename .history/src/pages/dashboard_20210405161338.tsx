import { Header } from "../components/Header";
import dynamic from 'next/dynamic';

import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

export default function Dashboard() {
  const options = {

  };

  const series = [
      {name: 'series1', data: [12, 42, 145, 90, 124, 160, 178] }
  ];

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="20">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da Semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

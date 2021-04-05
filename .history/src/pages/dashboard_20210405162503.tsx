import { Header } from "../components/Header";
import dynamic from 'next/dynamic';

import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

export default function Dashboard() {
  const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-04-02T00:00:00:00.000Z',
      '2021-04-03T00:00:00:00.000Z',
      '2021-04-04T00:00:00:00.000Z',
      '2021-04-05T00:00:00:00.000Z',
      '2021-04-06T00:00:00:00.000Z',
      '2021-04-07T00:00:00:00.000Z',
        ]
    }
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
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
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

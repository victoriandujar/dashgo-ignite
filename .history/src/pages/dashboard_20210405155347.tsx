import { Header } from "../components/Header";
import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
    return(
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="20" maxWidth={1480} mx="auto" px="20">
                <Sidebar />
            </Flex>
        </Flex>
    );
}
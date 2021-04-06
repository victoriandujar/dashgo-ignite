import { createContext, ReactNode, useContext } from 'react';
import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react';

interface SidebarDrawerContextProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerContextProps) {
    const disclosure = useDisclosure();

    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
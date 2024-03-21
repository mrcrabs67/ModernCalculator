import { Box, Button, List, SlideFade, useDisclosure } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import React from 'react';

type Props = {
    setMode: any;
};
const ConvertMenu = ({ setMode }: Props) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box display="flex" flexDirection="row">
            <SettingsIcon
                w="45px"
                h="45px"
                p="5px"
                m="5px"
                borderRadius="5px"
                onClick={onToggle}
            />
            <SlideFade in={isOpen} offsetY="-20px" unmountOnExit>
                <Box
                    display="flex"
                    bg="gray.100"
                    p="10px"
                    m="4px"
                    borderRadius="8px"
                    w="60%"
                    position="absolute"
                    zIndex="10"
                >
                    <List
                        display="flex"
                        flexDirection="column"
                        gap="10px"
                        fontSize="20px"
                    >
                        <Button onClick={() => setMode('Money')}>Money</Button>
                        <Button onClick={() => setMode('Distance')}>
                            Distance
                        </Button>
                    </List>
                </Box>
            </SlideFade>
        </Box>
    );
};

export default ConvertMenu;

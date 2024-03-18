import {
    Box,
    Flex,
    Text,
    Input,
    Select,
    Button,
    List,
    ListItem,
    useDisclosure,
    SlideFade,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { HamburgerIcon, SettingsIcon } from '@chakra-ui/icons';
import Money from './Money';
import Distance from './Distance';

const Converter = () => {

    const dataMoney: Array<string> = ['Доллар США', 'Рубли'];
    const dataDistance: Array<string> = ['Метры', 'Сантиметры'];

    const [mode, setMode] = useState('Distance');

    let converter; // Витя, я роутинг в приложении, трахни меня наконец
    switch (mode) {
        case 'Money':
            converter = <Money data={dataMoney} />;
            break;
        case 'Distance':
            converter = <Distance data={dataDistance} />;
            break;
    }

    const Menu = () => {
        // плохая практика, компонент в компоненте
        // либо выноси в отдельный файл, либо не плоди, лучше выносить
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
                            <Button onClick={() => setMode('Money')}>
                                Money
                            </Button>
                            <Button onClick={() => setMode('Distance')}>
                                Distance
                            </Button>
                        </List>
                    </Box>
                </SlideFade>
            </Box>
        );
    };

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="10px"
            w="100%"
        >
            {/*<Button onClick={() => dispatch(updateHistory(result))}>*/}
            {/*    Add to History*/}
            {/*</Button>*/}
            <Menu />
            {converter}
        </Flex>
    );
};

export default Converter;

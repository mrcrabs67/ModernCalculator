import React from 'react';
import { Box, Button, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

type Props = {
    toggleColorMode: any;
    colorMode: any;
};
const ThemeButton = ({ toggleColorMode, colorMode }: Props) => {
    return (
        <Button colorScheme="blue" onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
};

export default ThemeButton;

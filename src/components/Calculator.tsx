import { Box, Text, Button, Input, Flex } from '@chakra-ui/react';
import React from 'react';

type Props = {
    calculator: any;
    calcTypeChange: () => void;
    history: any;
};
const Calculator = ({ calculator, calcTypeChange }: Props) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            m="10px"
        >
            <Box display="flex" flexDirection="row" justifyContent="center" gap="10px">
                <Button onClick={calcTypeChange}>Input</Button>
                <Button onClick={calcTypeChange}>Typing</Button>
            </Box>
            <Box m="10px">{calculator}</Box>
        </Box>
    );
};

export default Calculator;

import { Box, Text, Button, Input, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

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
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                gap="10px"
            >
                <Link to="/calculator/input">
                    <Button>InputLink</Button>
                </Link>
                <Link to="/calculator/type">
                    <Button>TypingLink</Button>
                </Link>
                <Button onClick={calcTypeChange}>Change</Button>
            </Box>
            <Box m="10px">{calculator}</Box>
        </Box>
    );
};

export default Calculator;

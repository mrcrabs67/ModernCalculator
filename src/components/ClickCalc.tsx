import { Box, Button, Text } from '@chakra-ui/react';
import Number from './Numbers';
import CountButton from './CountButton';
import React from 'react';

type Props = {
    number: any;
    setNumber: any;
    result: any;
    setResult: any;
    updateHistory: (calcResult: string) => void;
    applyExpression: (countedNumber: string) => void;
};
const ClickCalc = ({
    number,
    setNumber,
    result,
    setResult,
    updateHistory,
    applyExpression,
}: Props) => {
    return (
        <Box
            display="flex"
            gap="5px"
            flexDirection="column"
            justifyContent="center"
            alignItems="baseline"
            w="250px"
        >
            <Box display="flex" w="100%" bg="gray.50" borderRadius="8px">
                <Text
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    w="100%"
                    h="38px"
                    px="4px"
                >
                    {number}
                </Text>
                <Text
                    display="flex"
                    justifyContent="end"
                    w="fit-content"
                    h="38px"
                    textColor="tomato"
                    alignItems="center"
                >
                    {result}
                </Text>
            </Box>

            <Box display="flex">
                <Number number={number} setNumber={setNumber} />
                <Box display="flex" flexDirection="column">
                    <CountButton
                        data={number}
                        expression={'+'}
                        applyExpression={applyExpression}
                    />
                    <CountButton
                        data={number}
                        expression={'-'}
                        applyExpression={applyExpression}
                    />
                    <CountButton
                        data={number}
                        expression={'*'}
                        applyExpression={applyExpression}
                    />
                    <CountButton
                        data={number}
                        expression={'/'}
                        applyExpression={applyExpression}
                    />
                </Box>
                <Button
                    m="4px"
                    bg="tomato"
                    onClick={() => {
                        const result = eval(number);
                        setResult(eval(number));
                        setNumber('0');
                        updateHistory(result);
                    }}
                >
                    =
                </Button>
            </Box>
        </Box>
    );
};

export default ClickCalc;

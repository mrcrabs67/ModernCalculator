import { Box, Input, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

type Props = {
    updateHistory: (calcResult: string) => void;
};

const InputCalc = ({ updateHistory }: Props) => {
    const [result, setResult] = useState('');
    const [counts, setCounts] = useState('');
    const inputRef = useRef<any>();
    // console.log(document.querySelector(".chakra-input.css-1uwy1eh"));
    useEffect(() => {
        inputRef.current?.focus();
    });

    const expressions = /[0-9]|\)/;
    const updateCounts = (e: any) => {
        const lastNumber = e.target.value[e.target.value.length - 2];
        if (
            !expressions.test(lastNumber) &&
            !expressions.test(e.nativeEvent.data) &&
            e.nativeEvent.data != null
        )
            return;
        if (expressions.test(e.nativeEvent.data))
            setResult(eval(e.target.value));
        setCounts(e.target.value);
    };

    const sendDataToHistory = (e: any) => {
        if (e.nativeEvent.key == 'Enter') {
            // debugger;
            updateHistory(counts);
            setCounts('');
        }
    };

    return (
        <Box display="flex" w="100%" justifyContent="center">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="2px"
                borderRadius="8px"
                borderColor="gray.50"
            >
                <Input
                    ref={inputRef}
                    onKeyDown={(e) => {
                        sendDataToHistory(e);
                    }}
                    border="transparent"
                    value={counts}
                    type="text"
                    onChange={(e) => {
                        updateCounts(e);
                    }}
                ></Input>
                <Text textColor="tomato" px="8px">
                    {' '}
                    {result}{' '}
                </Text>
            </Box>
        </Box>
    );
};

export default InputCalc;

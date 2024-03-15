import React from 'react';
import { Box, Button } from '@chakra-ui/react';

type Props = {
    number: string;
    setNumber?: any;
};
const numbers: Array<string> = [
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '0',
    ',',
];

const number = ({ number, setNumber }: Props) => {
    const nums = numbers.map((num) => {
        return (
            <Button
                key={num}
                w="40px"
                h="40px"
                margin="4px"
                onClick={() => {
                    console.log('asdf = ', num);
                    // debugger;
                    if (number == '0') setNumber(num);
                    else {
                        setNumber(`${number}${num}`);
                    }
                }}
            >
                {num}
            </Button>
        );
    });
    return <Box>{nums}</Box>;
};

export default number;

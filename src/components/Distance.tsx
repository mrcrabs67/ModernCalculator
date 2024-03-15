import {
    Box,
    Flex,
    Text,
    Input,
    Select,
    Button,
    List,
    ListItem,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

type Props = {
    data: Array<string>;
};

const Converter = ({ data }: Props) => {
    const selection = data.map((e) => {
        return (
            <option key={e} value={e}>
                {e}
            </option>
        );
    });

    const firstRef = useRef<any>();
    const secondRef = useRef<any>();

    const [input, setInput] = useState<string | number>(0);
    const [result, setResult] = useState<string | number>(0);

    const convert = () => {
        if (firstRef.current.value == 'Метры') {
            switch (secondRef.current.value) {
                case 'Сантиметры':
                    setResult(Number(input) * 100);
                    break;
                case 'Метры':
                    setResult(Number(input));
                    break;
            }
        }

        if (firstRef.current.value == 'Сантиметры') {
            switch (secondRef.current.value) {
                case 'Метры':
                    setResult(Number(input) / 100);
                    break;
                case 'Сантиметры':
                    setResult(Number(input));
                    break;
            }
        }
    };

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="10px"
            w="100%"
        >
            <Text>{result}</Text>
            <Input
                w="50%"
                type="number"
                onChange={(e) => setInput(Number(e.target.value))}
            />

            <Flex gap="15px">
                <Select ref={firstRef} size="md" w="90%">
                    {selection}
                </Select>
            </Flex>

            <Flex>
                <Select ref={secondRef} size="md" w="90%">
                    {selection}
                </Select>
            </Flex>

            <Button
                onClick={() => {
                    convert();
                }}
            >
                Convert
            </Button>
        </Flex>
    );
};

export default Converter;

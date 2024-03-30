import { Flex, Text, Input, Select, Button } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import getCurrency from '../functions/getCurrency';
import { useDispatch, useSelector } from "react-redux";
import { convertUsdRub } from '@store/calculator/thunks';
import { setRubUsdConvert } from '@store/calculator/reducer';
import { rubUsdConvertSelector, rubUsdSelector } from "@store/calculator/selector";

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

    const convertMoney = () => {
        switch (secondRef.current.value) {
            case 'Доллар США':
                setResult(input);
                break;
            case 'Рубли':
                setResult(Number(input) * rubUsd);
                break;
        }
    };

    const dispatch = useDispatch();

    const firstRef = useRef<any>();
    const secondRef = useRef<any>();

    const rubUsd = useSelector(rubUsdSelector);

    const [input, setInput] = useState<string | number>(0);
    const [result, setResult] = useState<string | number>(0);



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
                <Select ref={firstRef} size="md" w="100%">
                    {selection}
                </Select>
            </Flex>

            <Flex>
                <Select ref={secondRef} size="md" w="100%">
                    {selection}
                </Select>
            </Flex>

            <Button
                onClick={() => {
                    convertMoney();
                }}
            >
                Convert
            </Button>
        </Flex>
    );
};

export default Converter;

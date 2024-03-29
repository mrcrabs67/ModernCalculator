import {
    Box,
    Flex,
    Text,
    Input,
    Select,
    Button,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import getCurrency from '../functions/getCurrency';

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

    const convertMoney = async () => {
        // действительно, зачем же нам экономить ресурсы пк
        // будем каждый раз дергать
        // вместо того, что бы вынести в редакс получение курса и запрашивать один раз при открытии раздела
        // так же лучше и расчет вынести в редакс, и результат брать из редакса с помощью селектора
        const currencyUsd = Number(await getCurrency());
        switch (secondRef.current.value) {
            case 'Доллар США':
                setResult(input);
                break;
            case 'Рубли':
                // dispatch(updateHistory(Number(input) * currencyUsd));
                setResult(Number(input) * currencyUsd);
                break;
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

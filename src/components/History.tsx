import React from 'react';
import { Box, Button } from '@chakra-ui/react';

type Props = {
    data: any;
};

const History = ({ data }: Props) => {
    return data.map((result: any) => {
        return <Button key={result}>{result}</Button>; // для вывода информации использовать кнопку - сомнительно, но окей
    });
};

export default History;

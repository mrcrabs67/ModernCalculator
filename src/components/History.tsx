import React from 'react';
import { Box, Button } from '@chakra-ui/react';

type Props = {
    data: any;
    setNumber?: any;
};

const History = ({ data }: Props) => {
    return data.map((result: any) => {
        return <Button key={result}>{result}</Button>;
    });
};

export default History;

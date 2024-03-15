import { Button } from '@chakra-ui/react';
import React from 'react';

type Props = {
    expression: string;
    data: string;
    applyExpression: any;
};

const CountButton = ({ expression, data, applyExpression }: Props) => {
    const expressions: RegExp = /\+|\-|\/|\*| /;
    const lastNumber: string = data[data.length - 1];
    const checkExpressionType = () => {
        if (expressions.test(lastNumber)) return;
        applyExpression(data + expression);
    };
    return (
        <Button
            key={expression}
            w="40px"
            h="40px"
            margin="4px"
            bg="cyan"
            onClick={() => checkExpressionType()}
        >
            {expression}
        </Button>
    );
};

export default CountButton;

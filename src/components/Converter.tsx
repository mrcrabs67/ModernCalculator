import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ConvertMenu from '@components/ConvertMenu';
import { useDispatch } from 'react-redux';
import { fetchCurrencyRubUsd } from '@store/calculator/thunks';

type Props = {
    children?: React.ReactNode;
};
const Converter = ({ children }: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect');
        dispatch(fetchCurrencyRubUsd());
        return () => {
            // код при размонтировании компонента
        };
    }, [dispatch]);

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="10px"
            w="100%"
        >
            <ConvertMenu />
            {children}
        </Flex>
    );
};

export default Converter;

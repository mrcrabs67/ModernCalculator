import { Flex } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import Money from './Money';
import Distance from './Distance';
import ConvertMenu from '@components/ConvertMenu';

const Converter = () => {
    const dataMoney: Array<string> = ['Доллар США', 'Рубли'];
    const dataDistance: Array<string> = ['Метры', 'Сантиметры'];

    const [mode, setMode] = useState('Distance');

    let converter; // Витя, я роутинг в приложении, трахни меня наконец
    switch (mode) {
        case 'Money':
            converter = <Money data={dataMoney} />;
            break;
        case 'Distance':
            converter = <Distance data={dataDistance} />;
            break;
    }

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="10px"
            w="100%"
        >
            {/*<Button onClick={() => dispatch(updateHistory(result))}>*/}
            {/*    Add to History*/}
            {/*</Button>*/}
            <ConvertMenu setMode={setMode} />
            {converter}
        </Flex>
    );
};

export default Converter;

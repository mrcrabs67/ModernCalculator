import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ConvertMenu = () => {
    return (
        <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="row" gap="10px">
                <Link to="/converter/money">
                    <Button colorScheme="teal" size="xs">
                        Money
                    </Button>
                </Link>
                <Link to="/converter/distance">
                    <Button colorScheme="teal" size="xs">
                        Distance
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default ConvertMenu;

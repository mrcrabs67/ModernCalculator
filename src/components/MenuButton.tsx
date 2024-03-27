import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';

const MenuBut = () => {
    return (
        <Box display="flex" flexDirection="row">
            <Menu>
                <Link to="/">
                    <Button>
                        <GoHome />
                    </Button>
                </Link>
                <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                ></MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link to="/calculator">Calculator</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/converter">Converter</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};

export default MenuBut;

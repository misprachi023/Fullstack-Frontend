import React from 'react'
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuDivider,
    MenuButton,
    MenuList,
    Image,
    MenuItem,
    useDisclosure,
    useColorModeValue,
    Stack,
    
} from '@chakra-ui/react';
import {Link} from "react-router-dom"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
/**
* @author
* @function Navbar
**/


const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return(
    <>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link to='/login'>Login</Link>
            <Link to='/register'>signup</Link>
            <Link to='/posts'>Post</Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                
              </MenuButton>
              <MenuList>
                <MenuItem><Link to='/login'>Login</Link></MenuItem>
                <MenuItem><Link to='/register'>signup</Link></MenuItem>
                <MenuItem><Link to='/notes'>Notes</Link></MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link href={'#'}>Link 1</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
   )
  }
export default Navbar
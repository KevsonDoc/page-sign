// import Head from 'next/head'
import {
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Link,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,

} from '@chakra-ui/react';

import ChakraDivider from '../components/ChakraDivider';
import logo from '../assets/logo.svg';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Grid
        as="main"
        height="100vh"
        templateColumns="1fr 480px 480px 1fr"
        templateRows="1fr 480px 1fr"
        templateAreas="
          '. . . .'
          '. logo form .'
          '. . . .'
        "
        justifyContent="center"
        alignItems="center"
      >
        <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
          <img style={{height: 200}} src={logo} alt="logo"/>
          <Heading
            size="2xl"
            lineHeight="shorter"
            marginTop={16}
          >
            Log in to our systems
          </Heading>
        </Flex>
        <Flex
          gridArea="form"
          height="100%"
          backgroundColor="gray.700"
          borderRadius="md"
          flexDir="column"
          alignItems="stretch"
          padding={16}
        >
          <Input
            height="50px"
            backgroundColor="gray.800"
            focusBorderColor="purple.500"
            borderRadius="sm"
            placeholder="E-mail"
          />
          <Input
            height="50px"
            backgroundColor="gray.800"
            focusBorderColor="purple.500"
            borderRadius="sm"
            marginTop={2}
            placeholder="Password"
          />
          <Link
            alignSelf="flex-start"
            fontSize="sm"
            marginTop={2}
            color="gray.300"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
            onClick={onOpen}
          >
            Forgot yous password?
          </Link>
          <Button
            backgroundColor="purple.500"
            height="50px"
            borderRadius="sm"
            marginTop={6}
            _hover={{ color: 'purple.200' }}
            onClick={onOpen}
          >
            Sign
          </Button>
          <Text
            textAlign="center"
            fontSize="sm"
            color="gray.200"
            marginTop={6}
          >
            Don't have an account {' '}
            <Link
              color="gray.300"
              fontWeight="bold"
              _hover={{ color: 'purple.500' }}
              onClick={onOpen}
            >
              Register
            </Link>
          </Text>

          <ChakraDivider />

          <Flex alignItems="center" marginTop={6}>
            <Text fontSize="sm">
              Ou entre com
            </Text>

            <Button
              height="50px"
              flex="1"
              backgroundColor="gray.600"
              marginLeft={6}
              _hover={{ color: 'purple.300' }}
              onClick={onOpen}
              borderRadius="sm"
            >
              GITHUB
            </Button>
          </Flex>
        </Flex>
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="600px" height="300px">
          <ModalCloseButton backgroundColor="black" _hover={{ backgroundColor: "#FF5E00"}}/>
          <ModalBody display="flex" flex="1" justifyContent="center" alignItems="center">
            <Text color="black">
              Don't worry, we don't send any information to any database to check it, go
              to the console and check the network tab
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

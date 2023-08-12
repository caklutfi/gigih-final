import './App.css';
import * as React from 'react'
import { ChakraProvider, Box, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, useBoolean, Container, Flex } from '@chakra-ui/react'

function App() {
  const [flag, setFlag] = useBoolean()
  return (
    <ChakraProvider >
      
      
      <Container centerContent w='1000px'>
      <Flex>
        <Box bg='turquoise' w='500px'>jsdhfguhdfkghdfsjgjksgfjkhdbgjbgdfkbgdhjfd</Box>
      </Flex>  
      <Flex>
      <Box width='800' bg='blue.100'>Loremerghkghks,m d,mb dsfbhjrbjs ergerbti47ytqbrmsn gndfg</Box>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      
      

    </Flex>
    <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      {flag ? 'The flag is ON!' : 'Hover me to turn ON'}
    </div>
    </Container>
    
    </ChakraProvider>
  );
}

export default App;

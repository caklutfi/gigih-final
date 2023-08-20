
import React from "react";
import './App.css';
import { useState, useEffect } from 'react'
import { ChakraProvider, Link, Box, Input, Card, CardHeader, StackDivider, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, useBoolean, Container, Flex, Center, InputGroup } from '@chakra-ui/react'
import { TriangleUpIcon } from '@chakra-ui/icons'
import YoutubeEmbed from "./YoutubeEmbed";
import {
  Routes,
  Route,
  useSearchParams,
  BrowserRouter
} from "react-router-dom"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import axios from 'axios';

function Details() {

    let videonya = 'qdoOwCXuePg'
    const [queryParameters] = useSearchParams()


    const [flag, setFlag] = useBoolean()
    const [number, setNumber] = useState(0)


    const Increase = () => {
      setNumber(number + 1)
      console.log(number)

    }

    const [products, setProducts] = useState([])

      useEffect(() => {
        fetch(`http://localhost:8000/product?video=${queryParameters.get("video")}`)
        .then(response => response.json())

        .then(json => setProducts(json))
      },[])

    const [comments, setComments] = useState([])

      useEffect(() => {
        fetch(`http://localhost:8000/comment?video=${videonya}`)
        .then(response => response.json())
        .then(json => setComments(json))
      },[])



    // let handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     let res = await fetch(`http://localhost:8000/comment`, {
    //       method: "POST",
    //       body: JSON.stringify({
    //         videoID: videonya,
    //         username: username,
    //         email: email,
    //         comment: comment,
    //         timeStamp: Date.now()
    //       }),
    //     });
    //     let resJson = await res.json();
    //     if (res.status === 200) {
    //       setUsername("");
    //       setEmail("");
    //       setComment("");
    //       setTimeStamp(Date.now());
    //     }
    //     else {
    //       console.log("error occured");
    //     }
    //   } catch(err) {
    //     console.log(err);
    //   }

    // };

    // let res = await fetch()


      function cetakProduk() {
        console.log(products[0])
      }


    const arrayDataItems = products.map((product) => 
    <>
    <Card className={product.productID}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image boxSize="100px" rounded="lg" src={product.thumbnail} />
        <Stack>
          <CardBody>
            <Heading size='sm'><Link href={product.source}>{product.title}</Link></Heading>

            <Text py='2'>
              {product.description}
            </Text>
          </CardBody>
        </Stack>
      </Card><br />
      </>
    );

    const commentData = comments.map((comment) =>
    <>
      <Card>
                    <Heading size='xs' textTransform='uppercase'>
                      {comment.username}
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {comment.comment}
                    </Text>
                    <TriangleUpIcon/> {comment.likes} likes
                  </Card>
    </>
    );

    return (
      <ChakraProvider >
          <div className='navbar'>
          <ChakraLink as={ReactRouterLink} to={`/`}>
            <Button margin="5">Home</Button>
            </ChakraLink>
          </div>
          <Flex>
            <div className='products'>
            {arrayDataItems}
            </div>
            <div className='main-video'>
            <Card>
              <CardBody>
              <YoutubeEmbed boxSize='md' embedId={queryParameters.get("video")} />
                
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{queryParameters.get("title")}</Heading>
                <Text>
                    {queryParameters.get("description")}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  {number}
                </Text>
              </Stack>
              </CardBody>
            <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button  onClick={Increase} variant='solid' colorScheme='blue'>
                    Get details
                  </Button>
                  <Button onClick={cetakProduk} variant='ghost' colorScheme='blue'>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            </div>
            <div className='comment'>
            <Card maxWidth='md'>
              <CardHeader>
                <Heading >Comments</Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  {commentData}
                </Stack>
              </CardBody>
            </Card>
            {/* <Stack my="5px" color='turquoise'>
              <Input mx='5px' placeholder='your Username'/>
              <Input mx='5px' placeholder='your Comment'/>
            </Stack> */}

            {/* <form onSubmit={sendComment}>
                <input
                  type="text"
                  value={username}
                  placeholder="Name"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <input
                  type="text"
                  value={comment}
                  placeholder="Comment"
                  onChange={(e) => setComment(e.target.value)}
                />
                <br/>
                <button type="submit">Submit</button>
          </form> */}
            
            </div>
          </Flex>
          
            
      <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
        {flag ? 'The flag is ON!' : 'Hover me to turn ON'}
      </div>
      

      
      </ChakraProvider>
    )
}

export default Details;
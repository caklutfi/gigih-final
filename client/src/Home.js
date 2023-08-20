import { ChakraProvider, Grid, GridItem, Button, Divider, ButtonGroup, Text, Cardfooter, Card, CardBody, Image, Stack, Heading, CardFooter } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect( () => {
    fetch(`http://localhost:8000/video`)
    .then(response => response.json())
    .then(json => setVideos(json))
    },[])

    console.log(videos[0])

    const videosData = videos.map((video) =>
        <>
            <ChakraLink as={ReactRouterLink} to={`details?video=${video.videoID}&title=${video.title}&description=${video.description}`}>
                <Card maxW='sm'>
                <CardBody>
                    <Image
                    src={`https://i.ytimg.com/vi/${video.videoID}/hqdefault.jpg`}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{video.title}</Heading>
                    <Text>
                    </Text>
                    </Stack>
                </CardBody>
                {/* <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                    </ButtonGroup>
                </CardFooter> */}
                </Card>

            </ChakraLink>
            
        </>
    );
    

    return (

        <ChakraProvider>
            <div>
            <br/> 
            <Grid templateColumns='repeat(3, 1fr)' gap={5}>
                {videosData}
            </Grid>
            </div>
        </ChakraProvider>  
      
    );
  }
  
  export default Home;
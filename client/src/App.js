import './App.css';
import {useState, useEffect} from 'react'
import { ChakraProvider, Link, Box, Input, Card, CardHeader, StackDivider, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, useBoolean, Container, Flex, Center, InputGroup } from '@chakra-ui/react'
import { TriangleUpIcon } from '@chakra-ui/icons'
import YoutubeEmbed from "./YoutubeEmbed";
import axios from 'axios';

import { Routes, Route} from "react-router-dom";
import Details from './Details';
import Home from './Home';



function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="details" element={ <Details/> } />
      </Routes>
    </div>

  )
}

export default App;

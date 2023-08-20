import './App.css';
import {useState, useEffect} from 'react'
import { ChakraProvider, Link, Box, Input, Card, CardHeader, StackDivider, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, useBoolean, Container, Flex, Center, InputGroup } from '@chakra-ui/react'
import { TriangleUpIcon } from '@chakra-ui/icons'
import YoutubeEmbed from "./YoutubeEmbed";
import axios from 'axios';

const courses = [
  "Full Stack Developement Program",
  "Python Automation Testing Program",
  "UI/UX Program",
];

// let comments = [
//   {
//     username : 'bambang',
//     comment : 'very cool',
//     likes : 256
//   },
//   {
//     username : 'supra',
//     comment : 'ini keren sih',
//     likes : 123
//   },
//   {
//     username : 'terry',
//     comment : 'beli dimana itu',
//     likes : 676
//   }
// ];

let videonya = 'qdoOwCXuePg'

function App() {
  const [flag, setFlag] = useBoolean()
  const [number, setNumber] = useState(0)


const Increase = () => {
  setNumber(number + 1)
  console.log(number)
}

const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/product?video=${videonya}`)
    .then(response => response.json())

    .then(json => setProducts(json))
  },[])

const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/comment?video=${videonya}`)
    .then(response => response.json())
    .then(json => setComments(json))
  },[])


// const [video, setVideo] = useState();

// const getData = async () => {
//    await axios.get('http://localhost:8000/video')
// .then(res => {
//   console.log(res.data)  
//   setVideo(res.data)
//   console.log(typeof video)
//   console.log(video[1].description)
// })
// .catch(err =>{
//   console.log(err)
// })

// }

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [comment, setComment] = useState('');
const [timeStamp, setTimeStamp] = useState('');
const [commentLike, setCommentLike] = useState('');

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
    <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    {comment.username}
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {comment.comment}
                  </Text>
                  <TriangleUpIcon/> {comment.likes} likes
                </Box>
  </>
  );

  return (
    <ChakraProvider >
        <div className='navbar'>
          <Button margin="5">Home</Button>
          <Button margin="5">Home</Button>
          <Button margin="5">Home</Button>
        </div>
        <Flex>
          <div className='products'>
          {arrayDataItems}
          </div>
          <div className='main-video'>
          <Card>
            <CardBody>
            <YoutubeEmbed boxSize='md' embedId={videonya} />
              
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
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
          <div className='comment' boxSize='md'>
          <Card>
            <CardHeader>
              <Heading size='md'>Comments</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                {commentData}
              </Stack>
            </CardBody>
          </Card>
          <Stack my="5px" color='turquoise'>
            <Input mx='5px' placeholder='your Username'/>
            <Input mx='5px' placeholder='your Comment'/>
          </Stack>
          </div>
          
        </Flex>
        
          
    <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      {flag ? 'The flag is ON!' : 'Hover me to turn ON'}
    </div>
    

    
    </ChakraProvider>
  );
}

export default App;

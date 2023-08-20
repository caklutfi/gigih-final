require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
const Video = require('./model/video');
const Product = require('./model/product');
const Comment = require('./model/comment')
const json = require('body-parser/lib/types/json');

const uri = "mongodb+srv://admin:admin@cluster0.w1aqzen.mongodb.net/play?retryWrites=true&w=majority"
const PORT = 8000
const HOST = '0.0.0.0'

//connect to database
mongoose.connect(uri)
const database = mongoose.connection;
database.on('error',(error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected')
})


const app = express()
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

//define endpoint
app.get('/', (req, res) => {
    res.send('Hello world!\n')
})

app.get('/video', async (req, res) => {
    try{
        const videos = await Video.find({});
        res.json(videos)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/product', async (req, res) => {
    try{
        let video = req.query.video;
        console.log(video)
        const products = await Product.find({videoID: video});
        res.json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/comment', async(req,res) => {
    try{
        let video = req.query.video
        const comments = await Comment.find({videoID: video});
        res.json(comments)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post('/video', (req, res) => {
    const video = new Video({
        videoID: req.body.videoID,
        source: req.body.source,
        thumbnail: req.body.thumbnail,
        title: req.body.title,
        channel: req.body.channel,
        description: req.body.description,
        likes: req.body.likes

    })

    try {
        const videoToSave = video.save();
        res.status(200).send(video.title)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})


app.post('/product', (req, res) => {
    const product = new Product({
        videoID: req.body.videoID,
        productID: req.body.productID,
        source: req.body.source,
        thumbnail: req.body.thumbnail,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })
    try {
        const productToSave = product.save();
        res.status(200).send(product.title)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

app.post('/comment', (req, res) => {
    const comment = new Comment({
        videoID: req.body.videoID,
        username: req.body.username,
        email: req.body.email,
        comment: req.body.comment,
        timeStamp: Date.now(),
        commentLike: req.body.like
    })
    try {
        console.log(comment)
        const commentToSave = comment.save();
        res.status(200).send(comment.username)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})


app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
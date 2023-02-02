const express = require("express")
const cors = require("cors")
const connect = require('./config/db')
const http = require('http')
const url = require('url')

const { urlRoutes } = require("./routes/urlRoutes")
require('dotenv').config()


const app = express();

const port = process.env.PORT || 4321;

connect();
app.get('/res', cors(), (req, res) => {
    res.writeHead(301, {
        'Location': 'https://youtube.com'
    }).end()
})
app.use(cors());
app.use(express.json());
app.use(urlRoutes)



app.listen(port, () => {
    console.clear()
    console.log(`Listening on port ${port}`)
})
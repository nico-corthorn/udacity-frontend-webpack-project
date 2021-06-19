

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors');
const dotenv = require('dotenv');


console.log(__dirname)

dotenv.config();
const api_key = process.env.API_KEY
console.log(`Your API key is ${api_key}`);

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/add', add);
function add (req, res){
	console.log(req.body);
	let newData = req.body;
	let newEntry = {
		"date": newData.date,
		"zipCode": newData.zipCode,
		"temperature": newData.temperature,
		"userResponse": newData.userResponse
	}
	projectData.push(newEntry);
}

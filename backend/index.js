const express = require('express');
const routes = require('./app/routes/routes')
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*') 
    res.setHeader('Access-Control-Allow-Methods', '*') 
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

app.listen(3000, () => console.log(
    '🔥 server started at http://localhost:3000'
));
const express = require('express');
require('dotenv').config()
const redisClient = require('./config/redisConn.js');
const createRouter = require('./routes/routes.js');
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(createRouter);
// redisClient.ping().then(retdat => {console.log(retdat);
// }).catch(err => {console.log(err);});
app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`);});
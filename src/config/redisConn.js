const redisOm = require('redis');
const redisClient = redisOm.createClient({url: `redis://${process.env.REDIS_USER}:${process.env.REDIS_PASS}@${process.env.REDIS_HOST}`});
redisClient.on('error', (err) => console.log('Redis Client Error', err));
(async () =>{
    await redisClient.connect();
    console.log('Connected to Redis');
})();

module.exports =  redisClient;
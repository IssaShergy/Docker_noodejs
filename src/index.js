
 
 const  redis =require('redis');
const os =require('os');
const express=require('express');
 
const { Client }  = require('pg');   
const DB_USER='root'
const DB_PASSWORD='example';
const DB_PORT= 5423;
const DB_HOST= 'postgres';
const URI='postgres://root:example@postgres:5432/';
const client_ = new Client({
   connectionString: URI,
});
client_.on('error', err => console.log('POSTGRES Client Error', err))
client_.on('connect',() => console.log('connectd to POSTGRES>>>>>'))
.connect();

 
 
const client1 =  redis.createClient({
    url: 'redis://redis:6379'
})
client1.on('error', err => console.log('Redis Client Error', err))
client1.on('connect',() => console.log('connectd to redis>>>>>'))
client1.connect();

// const uri='mongodb://root:example@mongo:27017/';
 
 
// mongoose.connect(uri).then(()=>console.log('CONNECT TO DATATBASE>>>>>')).catch((err)=>console.log('failed to connect to db:',err));
const PORT=7070;
const app= express();
app.get('/',(req,res)=>{
console.log(`traffic from ${os.hostname}`);
client1.set('products','products >>>>>');
res.send(`<h1>security guards 70</h1> <h2></h2>`);
});
app.get('/data', async(reg,res)=>{
    const products = await client1.get('products')
    res.send(  `<h1>hello  ${products} </h2>`)
    console.log(products);
})
app.listen(PORT,()=>console.log(`APP RUNIING ON PORT:${PORT}`)); 
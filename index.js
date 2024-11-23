import express from 'express';

const app = express();
app.get('/',(res,req)=>{
    res.send("Hello World")
});

app.get('/test',(res,req)=>{
    res.send("Hello World Test")
});

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`sever is running on the port ${PORT}`)
})
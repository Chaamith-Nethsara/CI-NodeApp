import { createServer } from 'http';

const server = createServer((req,res)=>{
    res.write("hello world!");
    res.end();
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
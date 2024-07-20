const express=require('express');
const router=express.Router();
const server=express();

server.set('view engine','ejs');
server.use(router);

router.get('/',(req,res)=>{
    res.render('login.ejs');
})

server.listen(3000,()=>{
    console.log("Server is running in the port 3000");
})

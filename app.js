var express=require('express');
var app=express();
var port=process.env.PORT||3000;
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
    res.sendFile('index.html',{root: __dirname });
});

app.listen(port,() =>{
 console.log('initialPage:',port);
});

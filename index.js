const app = require("express")();


app.get('/', (req,res)=>{
    return res.send('Home Route');
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})
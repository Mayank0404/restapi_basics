const express =require('express')
const app=express()

const middleware=(req,res,next)=>{
    console.log("hi this is middleware");
    next()
}

app.use(middleware)

app.get("/",middleware,(req,res)=>{
    res.send("hi this is GET REQUEST")
})
app.get("/test",middleware,(req,res)=>{
    res.send("hi this is GET REQUEST")
})

app.post("/",(req,res)=>{
    res.send("hi this is post request")
})

app.put("/",(req,res)=>{
    res.send("hi this is put request")
})
app.delete("/",(req,res)=>{
    res.send("hi this is delete request")
})



const port=3000
app.listen(port,()=>console.log(`server s running at ${port}`))


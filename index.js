const express =require('express')
const app=express()
const uuid=require('uuid')

// const middleware=(req,res,next)=>{
//     console.log("hi this is middleware");
//     next()
// }

// app.use(middleware)

// app.get("/",middleware,(req,res)=>{
//     res.send("hi this is GET REQUEST")
// })
// app.get("/test",middleware,(req,res)=>{
//     res.send("hi this is GET REQUEST")
// })

// app.post("/",(req,res)=>{
//     res.send("hi this is post request")
// })

// app.put("/",(req,res)=>{
//     res.send("hi this is put request")
// })
// app.delete("/",(req,res)=>{
//     res.send("hi this is delete request")
// })

const members=[{
    id:1,
    name:"Mayank",
    email:"abc@gmail.com",
    status:"active"

},{
    id:2,
    name:"Shivam",
    email:"abc@gmail.com",
    status:"inactive" 
},{
    id:3,
    name:"Dubey",
    email:"abc@gmail.com",
    status:"active"
}]

app.use(express.json())

app.get("/showalluser",(req,res)=>{
  res.status(200).json(members)
})
app.get("/showUser/:uid",(req,res)=>{
     const id=req.params.uid
     const user=members.filter(member => member.id===parseInt(id))
     
     user.length !==0 ? res.status(200).json(user) :res.status(200).json({msg:"user not found"})
})
app.post("/addUser/",(req,res)=>{
    // const name=req.body.name
    // const email=req.body.email
    // const password=req.body.password
    // console.log(name,email,password);

    // or
// const{name,email,password}=req.body
// or 

const{name,email,password}={...req.body} 
members.push({id:uuid.v4(),name,email})
res.status(200).json(members)

})


const port=3000
app.listen(port,()=>console.log(`server s running at ${port}`))
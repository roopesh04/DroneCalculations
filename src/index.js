const path=require('path')
const express=require('express')
const calc=require('./routers/calc')

const app=express()
const port=process.env.PORT || 3000

app.use(express.json())
app.use(calc)

app.listen(port,()=>{
    console.log("Server is up on the "+port)
})
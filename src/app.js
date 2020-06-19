const path=require('path')
const express=require('express')
const hbs=express('hbs')
const calc=require('./routers/calc')

const app=express()
const port=process.env.PORT || 3000

const publicDirectoryPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialPath)

app.use(express.json())
app.use(calc)

app.get('',(req,res)=>{
    res.render('index',{

    })
})

app.listen(port,()=>{
    console.log("Server is up on the "+port)
})
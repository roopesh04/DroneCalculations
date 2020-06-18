const express=require('express')
const express=require('express')
const router=new express.Router()

router.post('/',async(req,res)=>{
    const data=new req.body

    try{
        await data.save()
        res.status(201).send(data)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports=router
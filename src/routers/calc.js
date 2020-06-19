const express=require('express')
const formula=require('../caluclations/formula')
const router=new express.Router()

router.post('/flight_time',async(req,res)=>{
    const data=req.body
    const flight_time=formula.hover_flight_time(data.battery_capacity,data.weight,data.current)
    console.log(flight_time)

    try{
        res.status(201).send({"flight_time":flight_time})
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports=router
const express=require('express')
const formula=require('../caluclations/formula')
const router=new express.Router()

router.get('/flight_time',async(req,res)=>{
    const flight_time=formula.hover_flight_time(req.query.battery_capacity,req.query.weight,req.query.current)
    try{
        res.status(201).send({"flight_time":flight_time})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/min_flight_time',async(req,res)=>{
    const min_flight_time=formula.min_flight_time(req.query.battery_capacity,req.query.max_current,req.query.no_of_motors)
    try{
        res.status(201).send({"min_flight_time":min_flight_time})
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports=router
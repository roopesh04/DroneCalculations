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

router.get('/max_forward_time',async(req,res)=>{
    const max_forward_time=formula.max_forward_flight(req.query.weight,req.query.m_m_dis,req.query.radius,req.query.thrust,req.query.no_routers)
    try{
        res.status(201).send({"max_forward_time":max_forward_time})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/range',async(req,res)=>{
    const range=formula.range(req.query.speed,req.query.time)
    try{
        res.status(201).send({"range":range})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/thrust',async(req,res)=>{
    const thrust=formula.thrust(req.query.kv,req.query.vol,req.query.diameter,req.query.pitch,req.query.vo)
    try{
        res.status(201).send({"thrust":thrust})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/rpm_motor',async(req,res)=>{
    const rpm_motor=formula.rpm_motor(req.query.kv,req.query.vol)
    try{
        res.status(201).send({"rpm_motor":rpm_motor})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/c_rating',async(req,res)=>{
    const c_rating=formula.c_rating(req.query.current,req.query.capacity)
    try{
        res.status(201).send({"c_rating":c_rating})
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports=router
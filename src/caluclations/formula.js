const hover_flight_time=(battery_capacity,weight,current)=>{
    const flight_time=((battery_capacity*0.8*0.6)/(1000*weight*current))
    return(flight_time)
}


module.exports={
    hover_flight_time:hover_flight_time
}
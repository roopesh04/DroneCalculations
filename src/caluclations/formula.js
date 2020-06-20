const hover_flight_time=(battery_capacity,weight,current)=>{
    const flight_time=((battery_capacity*0.8*60)/(1000*weight*current))
    return(flight_time)
}

const min_flight_time=(battery_capacity,max_current,no_of_motors)=>{
    const time=((battery_capacity*0.8*60)/(1000*max_current*no_of_motors))
    return(time)
}

module.exports={
    hover_flight_time:hover_flight_time,
    min_flight_time:min_flight_time
}
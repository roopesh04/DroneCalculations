const hover_flight_time=(battery_capacity,weight,current)=>{
    const flight_time=((battery_capacity*0.8*60)/(1000*weight*current))
    return(flight_time)
}

const min_flight_time=(battery_capacity,max_current,no_of_motors)=>{
    const time=((battery_capacity*0.8*60)/(1000*max_current*no_of_motors))
    return(time)
}

const max_forward_flight=(weight,m_m_dis,radius,thrust,no_routers)=>{
    const area=(((1/2)*(m_m_dis)*(m_m_dis))+((no_routers-1)*3.14*radius*radius))
    const speed=((1-(1/(thrust*thrust)))*((3.55*thrust)*(Math.sqrt(weight/area))))
    return speed
}

const range=(speed,time)=>{
    const range=(speed*time*60)
    return range
}

const thrust=(kv,vol,diameter,pitch,vo)=>{
    const thrust=(4.392399*Math.pow(10,-8)*(kv*vol)*(Math.pow(diameter,3.5)/Math.sqrt(pitch))*4.23333*0.0001*(kv*vol)*(pitch-vo))
    return thrust
}

const rpm_motor=(kv,vol)=>{
    const rpm=(kv*vol)
    return rpm
}

const c_rating=(current,capacity)=>{
    const c_rating=current/capacity
    return c_rating
}

module.exports={
    hover_flight_time:hover_flight_time,
    min_flight_time:min_flight_time,
    max_forward_flight:max_forward_flight,
    range:range,
    thrust:thrust,
    rpm_motor:rpm_motor,
    c_rating:c_rating
}
const flight_time=document.querySelector('.Flight_time')
const min_flight_time=document.querySelector('.min_flight_time')
const max_forword_time=document.querySelector('.max_forword_time')
const range=document.querySelector('.range')
const thrust=document.querySelector('.thrust')
const rpm=document.querySelector('.rpm_motor')
const c_rating=document.querySelector('.c_rating')

flight_time.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const sol_flight_time=document.querySelector('#Solution_of_flight_time')
    var battery_capacity=document.querySelector('#battery_capacity')
    battery_capacity=battery_capacity.value
    var weight=document.querySelector('#weight')
    weight=weight.value
    var current=document.querySelector('#current')
    current=current.value
    var url="/flight_time?"+"battery_capacity="+battery_capacity+"&weight="+weight+"&current="+current

    sol_flight_time.textContent="Working on flight time"

    if(!battery_capacity||!weight||!current){
        sol_flight_time.textContent="Provide all the values"
    }else{
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                if(data.flight_time==null){
                    sol_flight_time.textContent="Please prvide proper values"
                }else{
                    sol_flight_time.textContent="flight time="+data.flight_time
                }
                
            })
            })
    }
})

min_flight_time.addEventListener('submit',(e)=>{
    e.preventDefault()

    const sol_min_flight_time=document.querySelector('#Solution_of_min_flight_time')
    var battery_capacity_1=document.querySelector('#battery_capacity_1')
    battery_capacity_1=battery_capacity_1.value
    var max_current=document.querySelector('#max_current')
    max_current=max_current.value
    var no_of_motores=document.querySelector('#no_of_motors')
    no_of_motores=no_of_motores.value
    url="/min_flight_time?battery_capacity="+battery_capacity_1+"&max_current="+max_current+"&no_of_motors="+no_of_motores

    sol_min_flight_time.textContent="Working on minimum flight time"

    if(!battery_capacity||!max_current||!no_of_motores){
        sol_min_flight_time.textContent="Provide all the values"
    }else{
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                if(data.min_flight_time==null){
                    sol_min_flight_time.textContent="Provide proper values"
                }else{
                    sol_min_flight_time.textContent="Minimum Flight time="+data.min_flight_time
                }
            })
        })
    }
})

max_forword_time.addEventListener('submit',(e)=>{
    e.preventDefault()

    const sol_max_forword_time=document.querySelector('#Solution_of_min_flight_tile')
    var weight_1=document.querySelector('#weight_1')
    weight_1=weight_1.value
    var m_m_dis=document.querySelector('#m_m_dis')
    m_m_dis=m_m_dis.value
    var radius=document.querySelector('#radius')
    radius=radius.value
    var thrust_3=document.querySelector('#thrust')
    thrust_3=thrust_3.value
    var no_routers=document.querySelector('#no_routers')
    no_routers=no_routers.value
    url="/max_forward_time?weight="+weight_1+"&m_m_dis="+m_m_dis+"&radius="+radius+"&thrust="+thrust_3+"&no_routers="+no_routers

    sol_max_forword_time.textContent="Woking on maximum forword time"

    if(!weight_1||!m_m_dis||!radius||!thrust_3||!no_routers){
        sol_max_forword_time.textContent="Provide all the values"
    }else{
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                if(data.max_forward_time==null){
                    sol_max_forword_time.textContent="Provide proper values"
                }else{
                    sol_max_forword_time.textContent="Maximun forword time="+data.max_forward_time
                }
            })
        })
    }
})

range.addEventListener('submit',(e)=>{
    e.preventDefault()

    const sol_range=document.querySelector("#Solution_of_range")
    var speed=document.querySelector("#speed")
    speed=speed.value
    var time=document.querySelector('#time')
    time=time.value
    url="/range?speed="+speed+"&time="+time

    sol_range.textContent="Woking on range"

    if(!speed||!time){
        sol_range.textContent="Provide all the values"
    }else{
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                if(data.range==null){
                    sol_range.textContent="Provide proper values"
                }else{
                    sol_range.textContent="Range= "+data.range
                }
            })
        })
    }
})

thrust.addEventListener('submit',(e)=>{
    e.preventDefault()

    const sol_thrust=document.querySelector('#Solution_of_thrust')
    var kv=document.querySelector('#kv')
    kv=kv.value
    var vol=document.querySelector('#vol')
    vol=vol.value
    var diameter=document.querySelector('#diameter')
    diameter=diameter.value
    var pitch=document.querySelector('#pitch')
    pitch=pitch.value
    var vo=document.querySelector('#vo')
    vo=vo.value
    url="/thrust?kv="+kv+"&vol="+vol+"&diameter="+diameter+"&pitch="+pitch+"&vo="+vo
    
    sol_thrust.textContent="Working on thrust"

    if(!kv||!vol||!diameter||!pitch||!vo){
        sol_thrust.textContent="Provide all the values"
    }else{
        fetch(url).then((response)=>{
            response.json().then((data)=>{
              if(data.thrust==null){
                  sol_thrust.textContent="Provide Proper values"
              }else{
                  sol_thrust.textContent="Thrust="+data.thrust
              }  
            })
        })
    }
})

rpm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const sol_rpm=document.querySelector('#Solution_of_RPM')
    var rpm_kv=document.querySelector('#kv_1')
    rpm_kv=rpm_kv.value
    var rpm_vol=document.querySelector('#vol_1')
    rpm_vol=rpm_vol.value
    url="/rpm_motor?kv="+rpm_kv+"&vol="+rpm_vol

    sol_rpm.textContent="Working on RPM"

    if(!rpm_kv||!rpm_vol){
        sol_rpm.textContent="Provide all the values"
    }else{
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                if(data.rpm_motor==null){
                    sol_rpm.textContent="Provide Proper values"
                }else{
                    sol_rpm.textContent="RPM="+data.rpm_motor
                }
            })
        })
    }
})

c_rating.addEventListener('submit',(e)=>{
    e.preventDefault()

    const sol_c_rating=document.querySelector('#Solution_of_c_rating')
    var c_current=document.querySelector('#current_1')
    c_current=c_current.value
    var c_capacity=document.querySelector('#capacity')
    c_capacity=c_capacity.value
    url="/c_rating?current="+c_current+"&capacity="+c_capacity

    sol_c_rating.textContent="Working on c rating"

    if(!c_current||!c_capacity){
        sol_c_rating.textContent="Provide all values"
    }else{
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                if(data.c_rating==null){
                    sol_c_rating.textContent="Provide proper values"
                }else{
                    sol_c_rating.textContent="C Rating="+data.c_rating
                }
            })
        })
    }
})
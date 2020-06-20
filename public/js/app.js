const flight_time=document.querySelector('.Flight_time')
const min_flight_time=document.querySelector('.min_flight_time')
const max_forword_time=document.querySelector('.max_forword_time')
const sol_flight_time=document.querySelector('#Solution_of_flight_time')
const sol_min_flight_time=document.querySelector('#Solution_of_min_flight_time')
const sol_max_forword_time=document.querySelector('#Solution_of_min_flight_tile')

flight_time.addEventListener('submit',(e)=>{
    e.preventDefault()
    
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

    var battery_capacity=document.querySelector('#battery_capacity_1')
    battery_capacity=battery_capacity.value
    var max_current=document.querySelector('#max_current')
    max_current=max_current.value
    var no_of_motores=document.querySelector('#no_of_motors')
    no_of_motores=no_of_motores.value
    url="/min_flight_time?battery_capacity="+battery_capacity+"&max_current="+max_current+"&no_of_motors="+no_of_motores

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

    var weight=document.querySelector('#weight_1')
    weight=weight.value
    var m_m_dis=document.querySelector('#m_m_dis')
    m_m_dis=m_m_dis.value
    var radius=document.querySelector('#radius')
    radius=radius.value
    var thrust=document.querySelector('#thrust')
    thrust=thrust.value
    var no_routers=document.querySelector('#no_routers')
    no_routers=no_routers.value
    url="/max_forward_time?weight="+weight+"&m_m_dis="+m_m_dis+"&radius="+radius+"&thrust="+thrust+"&no_routers="+no_routers

    sol_max_forword_time.textContent="Woking on maximum forword time"

    if(!weight||!m_m_dis||!radius||!thrust||!no_routers){
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
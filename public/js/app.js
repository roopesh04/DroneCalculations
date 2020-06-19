const flight_time=document.querySelector('.Flight_time')
const sol_flight_time=document.querySelector('#Solution_of_flight_tile')

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
                sol_flight_time.textContent="flight time="+data.flight_time
            })
            })
            // answer=response.json().data.flight_time
            // console.log(answer)
            // sol_flight_time.textContent="flight time="+answer
        
    }
})
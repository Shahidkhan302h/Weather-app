


async function getdata(){

    const city = document.querySelector('input').value
    
    
    const apikey = `0bb299d51f5b43eebe6155522242611`
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`

   const response = await fetch(url)
    const data = await response.json()
    console.log(data)


document.querySelector('.weatherResult').innerHTML =`    
       <p> <strong>Location :</strong> ${data.location.name}</p>
       <p> <strong>Wind Degree  :</strong>${data.current.wind_degree}</p>
        <p> <strong>Calcius :</strong>${data.current.temp_c}</p>
       <p> <strong>Country :</strong>${data.location.country}</p>
       <p> <strong>LocalTime :</strong>${data.location.localtime}</p>`


}

// getdata()



async function getdata(){

    const city = document.querySelector('input').value
    
    
    const apikey = `0bb299d51f5b43eebe6155522242611`
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`

   const response = await fetch(url)
    const data = await response.json()
    console.log(data)


document.querySelector('.weatherResult').innerHTML =`    
       <p> <strong>Location :</strong> ${data.location.name}</p>
       <p> <strong>Temp :</strong>${data.current.cloud}</p>
       <p> <strong>Country :</strong>${data.location.country}</p>
       <p> <strong>LocalTime :</strong>${data.location.localtime}</p>`


}

// getdata()
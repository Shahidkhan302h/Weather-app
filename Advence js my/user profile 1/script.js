

async function getProfile(){

    // const user = document.querySelector('input').value
  
    const response = await fetch(`https://dummyjson.com/user/`)
    const data = await response.json()
    console.log(data)
    const user = data.users[0]
    console.log(user)
   
document.querySelector('.userprofile').innerHTMl =`   
                    <p><strong>first name  :</strong>${user.firstName }</p>
                    <p><strong>Last name  :</strong>${user.lastName}</p>
                    <p><strong>Age  :</strong>${user.age}</p>
                    <p><strong>Address  :</strong>${user.address}</p>
                    <p><strong>Birth Date  :</strong>${user.birthDate}</p>`
}



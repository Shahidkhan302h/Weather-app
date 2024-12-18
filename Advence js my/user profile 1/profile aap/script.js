

async function getProfile(){

    // const user = document.querySelector('input').value
  
    const response = await fetch(`https://dummyjson.com/user/`)
    const data = await response.json()
    console.log(data)
    const user = data.users[0]
    console.log(user)
   console.log(user.firstName ,user.lastName,user.age)


document.querySelector('.userprofile').innerHTML=`

<p><strong>Name :</strong>${user.firstName , user.lastName}</p>
<p><strong>Age :</strong>${user.age}</p>
<p><strong>:</strong>${user.age}</p>
<p><strong>Age :</strong>${user.age}</p>



`


}

getProfile()


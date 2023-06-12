
const API_USER="http://localhost:8080"


function addUser(UserData){
    return fetch(`${API_USER}/user/register`, {
        method: 'POST',
       headers:{
        "content-type":"application/json",
       } ,
       body:JSON.stringify(UserData)
    })
    .then(res => res.json())
}

export {addUser}
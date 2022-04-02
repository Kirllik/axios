const axios = require('axios').default;


axios.get('https://social-network.samuraijs.com/api/1.0/users?page=3&count=5')

    .then(res => {
        console.log(res.data)
    })

    .catch(error => {
        console.log(error)
    })
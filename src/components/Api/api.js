import axios from 'axios'

export const fetchData = ( async () => {
    const userDetails = await axios.get("https://jsonplaceholder.typicode.com/users");
    return userDetails.data

});

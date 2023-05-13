import axios from "axios";

const baseURL = "http://localhost:3000/api/";



export default  async function getTrending(id){
    const response = await axios.get(`${baseURL}trending`)

    // now we need our res in form of the json format 
    const posts =  response.data;

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}

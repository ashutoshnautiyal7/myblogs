const baseURL = "http://localhost:3000/api/";


export default async function getPopular(id){
    const response = await fetch(`${baseURL}popular`)

    // now we need our res in form of the json format 
    const posts = await response.json()

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}


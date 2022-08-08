//  this file is  created to get the data from the backend // fetching the data from posts


//endpoint:  api/posts/


// fetch function is a js function which returns is going to return the promise as a response

const baseURL = "http://localhost:3000/api/";

export default  async function getPost(id){
    const response = await fetch(`${baseURL}posts`)

    // now we need our res in form of the json format 
    const posts = await response.json()

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}




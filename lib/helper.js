//  this file is  created to get the data from the backend // fetching the data from posts


//endpoint:  api/posts/


// fetch function is a js function which returns is going to return the promise as a response

const baseURL = process.env.baseURL;

export default async function getPost(id){
    const res = await fetch(`${baseURL}`)

    // now we need our res in form of the json format 
    const posts = await res.json()

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}

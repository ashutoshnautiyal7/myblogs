// this file is created so that we can have we can access individual post via the post id ----> i.e dynamic routing 

import data from "../data";

// this {postid} file is a slug or we can say a variable

 


// api/posts/1
export default function handler(req, res) {

    const {postid} = req.query;   // note the variable and the filename(array).js  are having the same name
                                    // we have created the array type filename so that we can access the variable form query
    const {Posts} = data;
     
    if(postid){
        // the find method iterate over the array of object
        const post =  Posts.find( value => value.id == postid)
        // console.log(post)
        return res.status(200).json(post)
    }

    res.status(404).json({error: "post with the entered id not found not found"})
    
}

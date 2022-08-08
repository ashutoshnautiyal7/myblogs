// this file is created so that we can have we can access individual post via the post id ----> i.e dynamic routing 

import data from "../data";

// this {popularid} file is a slug or we can say a variable

 


// api/posts/1
export default function handler(req, res) {

    const {popularid} = req.query;   // note the variable and the filename(array).js  are having the same name
                                    // we have created the array type filename so that we can access the variable form query
    const {Popular} = data;
     
    if(popularid){
        // the find method iterate over the array of object
        const post =  Popular.find( value => value.id == popularid)
        // console.log(post)
        return res.status(200).json(post)
    }

    res.status(404).json({error: "post with the entered id not found not found"})
    
}

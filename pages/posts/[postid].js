
// this is for the individual post which we'll get after clicking the main slider .... note: we will do this via dynamci routing
//  for this first we have to rename this file and change this as a slug // page.js --> [postid].js 
// we already did the same thing for our api 

// inorder to get our header and footer here we have to import format 
import Image from "next/image"
import Author from "../../components/child/author"
import Related from "../../components/child/related"
import Format from "../../layout/format"
import getPost from "../../lib/helper"






export default function page({id, category, img, published ,description, subtitle, author, title}) {



  return (
    <Format>
        <section className="container mx-auto py-16 w-1/2 ">

            <div className="flex justify-center ">
            {author?<Author></Author>:<></> }
            </div>

            <div className="post py-10 ">
                <h1 className="font-bold text-4xl font-bold text-center pb-5">
                    {title || "no title"}
                </h1>

                <p className="text-gray-500 text-xl text-center">{subtitle || "no subtitle"}</p>

                <div className="py-10">
                    <Image src={img || '/images/img1.jpg'} 
                            width={1200}
                            height={800}
                    ></Image>
                </div>

                <div className="content text-gray-600 text-lg flex flex-col gap-4 ">
                    <p>
                       {description}
                    </p>

                </div>

            </div>

            <Related />
        </section>
    </Format>
  )
}


// function for our static routing
export async function getStaticProps( { params } ){
    const posts = await getPost(params.postid)

    return {
        props : posts
    }
}

export async function getStaticPaths(){
    const posts = await getPost();
    const paths = posts.map(value => {
        return {
            params : {
                postid : value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback : false
    }

}
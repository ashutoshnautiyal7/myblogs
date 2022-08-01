
// inorder to get our header and footer here we have to import format 
import Image from "next/image"
import Author from "../../components/child/author"
import Related from "../../components/child/related"
import Format from "../../layout/format"




export default function page() {
  return (
    <Format>
        <section className="container mx-auto py-16 w-1/2 ">

            <div className="flex justify-center ">
                <Author />
            </div>

            <div className="post py-10 ">
                <h1 className="font-bold text-4xl font-bold text-center pb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa suscipit placeat laudantium! Quaerat in natus ea maiores officiis. Debitis laborum obcaecati vitae.
                </h1>

                <p className="text-gray-500 text-xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque blanditiis velit ex! Illo obcaecati aliquam saepe sit ipsa sint dolorum magnam officiis.</p>

                <div className="py-10">
                    <Image src={'/images/img1.jpg'} 
                            width={1200}
                            height={800}
                    ></Image>
                </div>

                <div className="content text-gray-600 text-lg flex flex-col gap-4 ">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat accusamus omnis earum repellat eveniet veniam fuga voluptas quidem deserunt dignissimos illum a possimus eos aut, voluptate sit voluptates aliquid atque libero suscipit error sint? Aperiam ea eius animi, vero, molestiae voluptas veritatis sunt optio laudantium natus et dicta!

                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe neque quaerat autem, quisquam error, qui quidem laborum itaque cupiditate non et asperiores?

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit distinctio possimus. Dignissimos aliquam explicabo repudiandae necessitatibus culpa nulla magnam, sint est odio placeat quis delectus id! Cumque cupiditate omnis ducimus explicabo quisquam. Laborum et suscipit possimus cum omnis unde delectus necessitatibus. Unde assumenda nam fuga dolor vitae tempora quae voluptatem voluptates perspiciatis soluta.
                    </p>

                </div>

            </div>

            <Related />
        </section>
    </Format>
  )
}

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"

async function getBlogs(){
    const supabase = createServerComponentClient({cookies})
    const {data, error} = await supabase.from('blog').select()

    // show error
    if(error){
        console.log(error.message)
    }
    return data
}

export default async function Bloglist() {
    const blogs = await getBlogs()
   
  return (
    // to map the list of items
    <>
    {blogs.map( (blog) => (
        <div key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
            </Link>
        </div>
    ))}
    </>
  )
}

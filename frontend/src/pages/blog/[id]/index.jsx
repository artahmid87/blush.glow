import BlogById from "@/components/Blog/BlogById"
import Header from "@/components/ui/reusableComponent/Header"
import { useGetBlogByIdQuery } from "@/redux/api/Api"
import { useRouter } from "next/router"

 const Index = () => {
   const router =  useRouter()
  const id = router.query.id
  const blogData =   useGetBlogByIdQuery(id)
  
  return (
  <section className='mt-20 bg-white'>
 
    <Header title = "Single Blog" />
    <BlogById blogData = {blogData}/>

  </section>
  )
}

export default Index
import { useGetBlogQuery } from "@/redux/api/Api"
import Container from "../ui/Container"
import Link from "next/link"
import BlogSidebar from "./sideBar"
import ApiUrl from "../ui/APIURL"
import Image from "next/image"

const Blog = () => {
  const { data, isLoading, isError } = useGetBlogQuery()

  return (
    <>
      {
        isLoading && (<div className="text-center py-20 text-7xl flex justify-center items-center"> Loading....</div>)
      }{
        isError && (<div className="text-center py-20 text-7xl flex flex-col justify-center items-center"> <h1>Something Went Wrong!</h1> <h1>Please! try again</h1></div>)
      }
      <div className='py-32 bg-white'>
        <Container>
          <div>

            <div className='grid grid-cols-1 place-items-center place-content-center  md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 '>
              {
                data?.map((item) => (
                  <div key={item.id} className='relative w-full h-[400px] mb-20'>
                    {/* blog images */}
                   
                 
                        <Image
                            src={`${ApiUrl}/images/blog_img/${item?.file}`} alt={item?.title}
                            width={500}
                            height={500}
                            priority
                        />

                    <div className='absolute bottom-[-10%] left-0 w-[80%] h-[300px] bg-gray-100 p-6'>

                      {/*Upload date */}
                      <p className="text-[16px] text-primary pt-4 ">{new Date(item.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                      <h1 className='mt-4 text-tertiary text-2xl  font-secondery pb-8'>{item.title.slice(0, 70)}...</h1>
                      <Link href={`blog/${item.id}/#blog`} className=' underline text-gray-400 font-secondery'>Read More</Link>
                    </div>
                  </div>
                ))
              }
            </div>

            <BlogSidebar />
          </div>
        </Container>
      </div>
    </>

  )
}

export default Blog
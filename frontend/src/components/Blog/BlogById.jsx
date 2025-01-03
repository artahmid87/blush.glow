import Container from "../ui/Container"
import Layout from "./Layout"

const BlogById = (props) => {
  const { data, isLoading, isError } = props.blogData


  return (
    <Layout>
      <Container>
        <div id="blog" className="w-full  h-full">
          {
            <div key={data?.id}>
              <img className="w-full  flex justify-center items-start  lg:h-[500px] "
              src={"https://blush.glow.api.ara-dreamhome.com/images/blog_img/" + data?.file} alt={data?.title}/>
              <p className="text-[16px] text-primary py-8">{new Date(data?.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
             
             <h1 className="text-2xl text-primary italic font-secondery py-6">{data?.title}</h1>

              <p className="text-secondery text-justify pb-6">{data?.description}</p>
            </div>
          }
        </div>
      </Container>
    </Layout>
  )
}

export default BlogById

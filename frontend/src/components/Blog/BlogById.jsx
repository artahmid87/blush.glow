import Image from "next/image";
import ApiUrl from "../ui/APIURL";
import Container from "../ui/Container";
import Layout from "./Layout";
import DOMPurify from "dompurify";




const BlogById = (props) => {
  const { data, isLoading, isError } = props.blogData;


  const description = DOMPurify.sanitize(data?.description);

  return (
    <Layout>
      <Container>
        <div id="blog" className="w-full h-full py-10 pl-6 lg:pl-0">
          <div key={data?.id}>
            <Image
              src={`${ApiUrl}/images/blog_img/${data?.file}`}
              alt={data?.title}
              width={500}
              height={500}
              priority
              className="w-full flex justify-center items-start lg:h-[500px]"
            />
            <p className="text-[16px] text-primary py-8">
              {new Date(data?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <h1 className="text-2xl text-primary italic font-secondery py-6">
              {data?.title}
            </h1>
            <div
              className="prose max-w-none text-justify pb-6"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default BlogById;

import { useState, useRef } from "react";
import { useGetBlogQuery, useFindAllBlogCategoriesQuery } from "@/redux/api/Api";
import Link from "next/link";
import gsap from "gsap";
import Container from "../ui/Container";
import { DropdownIcon } from "../ui/icon";
import ApiUrl from "../ui/APIURL";

const BlogSidebar = () => {
  const { data: blogs, isLoading: blogsLoading, isError: blogsError } = useGetBlogQuery();
  const { data: categories, isLoading: categoriesLoading, isError: categoriesError } = useFindAllBlogCategoriesQuery();
  const [openCategory, setOpenCategory] = useState(null);
  const contentRefs = useRef({}); 
  
  const groupedBlogs = categories?.map((category) => ({
    ...category,
    blogs: blogs?.filter((blog) => blog.CategoryId === category.id),
  }));

  const toggleCategory = (categoryId) => {
    const content = contentRefs.current[categoryId];

    if (openCategory === categoryId) {
      
      gsap.to(content, {
        height: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      setOpenCategory(null);
    } else {
   
      if (content) {
        gsap.set(content, { height: "auto" });
        const fullHeight = content.scrollHeight;

        gsap.fromTo(
          content,
          { height: 0 },
          {
            height: fullHeight,
            duration: 0.5,
            ease: "power3.out",
          }
        );
      }
      setOpenCategory(categoryId);
    }
  };

  return (
    <Container>
      <div className="border-r border-[#ccc] bg-[#ffeeeb] w-full py-10 px-8">
     
        {blogsLoading && <div className="text-center py-20 text-7xl flex justify-center items-center">Loading...</div>}
        {blogsError && (
          <div className="text-center py-20 text-7xl flex justify-center items-center">
            <h1>Something Went Wrong!</h1> <h1>Please try again</h1>
          </div>
        )}

        {/* Recent Posts Section */}
        <div>
          <h3 className="font-secondery text-tertiary font-medium text-lg underline decoration-slice decoration-primary underline-offset-8">Recent Posts</h3>
          {blogs?.slice(0, 4).map((item) => (
            <Link key={item.id} href={`/blog/${item.id}/#blog`}>
              <div className="flex gap-4 py-4">
                <div>
                  <img
                    className="w-16 h-14 md:w-20 md:h-20"
                    src={`${ApiUrl}/images/blog_img/${item.file}`}
                    alt={item.title}
                  />
                </div>
                <div>
                  <h1 className="text-tertiary font-secondery text-[16px] leading-snug">
                    {item.title.slice(0, 50)}...
                  </h1>
                  <p className="text-[12px] text-primary pt-4">
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

     
        <div>
          <h3 className="font-secondery text-tertiary font-medium text-lg mt-8 underline decoration-slice decoration-primary underline-offset-8">
            Categories
          </h3>
          {groupedBlogs?.map((category) => (
            <div key={category.id}>
          
              <div
                onClick={() => toggleCategory(category.id)}
                className="flex justify-between items-center cursor-pointer py-2"
              >
                <h4 className="text-lg font-medium text-tertiary">{category.title}</h4>
                <DropdownIcon className={openCategory === category.id ? "rotate-180" : ""} />
              </div>

         
              <div
                ref={(el) => (contentRefs.current[category.id] = el)}
                style={{
                  height: openCategory === category.id ? "auto" : 0,
                  overflow: "hidden",
                }}
                className="ml-4 border-l border-tertiary pl-4"
              >
                {category.blogs?.length > 0 ? (
                  category.blogs.map((blog) => (
                    <Link key={blog.id} href={`/blog/${blog.id}/#blog`}>
                      <div className="flex gap-4 py-2">
                        <div>
                          <img
                            className="w-12 h-12 md:w-16 md:h-16"
                            src={`http://localhost:5000/images/blog_img/${blog.file}`}
                            alt={blog.title}
                          />
                        </div>
                        <div>
                          <h5 className="text-[14px] text-tertiary font-secondery">
                            {blog.title.slice(0, 40)}...
                          </h5>
                          <p className="text-[10px] text-primary">
                            {new Date(blog.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No blogs available in this category</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BlogSidebar;

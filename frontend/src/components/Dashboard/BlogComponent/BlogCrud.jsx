import { useDeleteBlogMutation, useGetBlogQuery } from '@/redux/api/Api';
import { Button, Popconfirm } from 'antd/dist/antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DOMPurify from "dompurify"; 

const BlogCrud = () => {
  const { data, isLoading, isError, refetch } = useGetBlogQuery();
  const [deleteBlog] = useDeleteBlogMutation();
  const [isMobile, setIsMobile] = useState(false);
    const sanitizedDescription = DOMPurify.sanitize(data?.description);

  console.log(data)

  useEffect(() => {
    const interval = setInterval(() =>{
     refetch()
    }, 1000)
    return () => clearInterval(interval)
   }, [refetch])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id).unwrap();
      refetch()
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="w-full h-16 bg-pink-500 py-4 mb-4">
        <h1 className="text-2xl font-bold text-center text-white">{data?.length} Blog Posts</h1>
      </div>

      {/* Content */}
      <div className={isMobile ? 'grid gap-4' : 'overflow-x-auto'}>
        {isMobile ? (
       
          data?.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-lg font-bold mb-2">{item.title.slice(0, 50)}...</h2>
              <img
                src={`http://localhost:5000/images/blog_img/${item?.file}`}
                alt={item.title}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <p className="text-gray-700">
              <div
                className="prose max-w-none text-gray-700 text-justify"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    item?.description?.slice(0, 100)
                  ),
                }}
              />
                </p>
              <p className="text-gray-700">{item?.categories?.title}</p>
              <div className="flex justify-between mt-4">
                <Link href={`/dashboard/updateBlog/${item.id}`}>
                  <Button className="bg-yellow-300 text-blue-500 px-3 py-1 rounded-full hover:bg-yellow-400 text-sm">
                    Update
                  </Button>
                </Link>
                <Popconfirm
                  title="Delete the Blog"
                  description="Are you sure to delete this Blog?"
                  onConfirm={() => handleDelete(item.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="bg-rose-500 text-white px-3 py-1 rounded-full hover:bg-red-600 text-sm">
                    Delete
                  </Button>
                </Popconfirm>
              </div>
            </div>
          ))
        ) : (
          // Desktop and Tablet view as a table
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300">Title</th>
                <th className="px-4 py-2 border border-gray-300">Image</th>
                <th className="px-4 py-2 border border-gray-300">Description</th>
                <th className="px-4 py-2 border border-gray-300">Category</th>
                <th className="px-4 py-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="px-4 py-2 border border-gray-300">{item?.title?.slice(0, 50)}...</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <img
                      src={`http://localhost:5000/images/blog_img/${item?.file}`}
                      alt={item?.title}
                      className="w-16 h-16 mx-auto object-cover rounded-md"
                    />
                  </td>
                   
                  
                  <td className="px-4 py-2 border prose border-gray-300" >
                  <div
                className="prose max-w-none text-gray-700 text-justify"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    item?.description?.slice(0, 100)
                  ),
                }}
              />
                    </td>

                  <td className="px-4 py-2 border border-gray-300">{item?.categories?.title}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex flex-col items-center space-y-2">
                      <Link href={`/dashboard/updateBlog/${item.id}`}>
                        <Button className="bg-yellow-300 text-blue-500 px-2 py-1 rounded-full hover:bg-yellow-400">
                          Update
                        </Button>
                      </Link>
                      <Popconfirm
                        title="Delete the Blog"
                        description="Are you sure to delete this Blog?"
                        onConfirm={() => handleDelete(item.id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button className="bg-rose-500 text-white px-2 py-1 rounded-full hover:bg-red-600">
                          Delete
                        </Button>
                      </Popconfirm>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div >
     
    </div>
  );
};

export default BlogCrud;

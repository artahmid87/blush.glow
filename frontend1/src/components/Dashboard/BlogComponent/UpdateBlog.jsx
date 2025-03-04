import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFindAllBlogCategoriesQuery, useUpdateBlogMutation } from '@/redux/api/Api';

const UpdateBlog = (props) => {


  const router = useRouter()
  const id = router.query.id

  const { data, isLoading, isError } = props.blogData;

  const { data: caregory, isError: issue } = useFindAllBlogCategoriesQuery()


  const [updateBlog, { isLoading:Loading, isSuccess, isError:IsError }] = useUpdateBlogMutation();


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [CategoryId, setCategoryId] = useState("")
  const formRef = useRef();




  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setFile(data.file)
      setDescription(data.description)
      setCategoryId(data.CategoryId)
    }
  }, [data]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    formData.append('title', title);
    formData.append('description', description);
    formData.append('CategoryId', CategoryId);

  
       await updateBlog({ id, blogUpdate: formData }).unwrap(); 
      router.push('/dashboard/blog');

    } catch (error) {
      console.error('Failed to update the blog.');
    }
  };

  if (Loading) return <p>Loading...</p>;
  if (isError) return <p>Error loading blog data.</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <Link className='py-2 px-3 bg-blue-500 text-white' href={'/dashboard/blog'}>Back to Dashboard</Link>
        <h1 className="text-2xl font-semibold mb-6 text-center pt-4">Update Blog Post</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              rows="4"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Category</label>
            <select
              name="category"

              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              required
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value={data?.categories
                ?.title}> {data?.categories
                  ?.title}</option>
              {
                caregory?.map((item) => (

                  <option
                    value={item?.id}
                    key={item?.id}
                  >{item?.title}</option>

                ))

              }

            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
           {
            Loading ? <> Wait...</> : <> Update Blog</>
           }
          </button>

          {IsError && <p className="text-sm text-red-600 mt-2">Something Went Wrong!</p>}
          {isSuccess && <p className="text-sm text-green-600 mt-2">Blog updated successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;

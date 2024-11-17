import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFindAllBlogCategoriesQuery } from '@/redux/api/Api';

const UpdateBlog = (props) => {
  const { data, isLoading, isError } = props.blogData;
  console.log(data)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [BlogCategoryId, setBlogCategoryId] = useState("")
  const formRef = useRef();
  const router = useRouter()

  const { data: caregory, isError: issue } = useFindAllBlogCategoriesQuery()

  // store previous data in useState
  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setBlogCategoryId(data.BlogCategoryId);
    }
  }, [data]);

  // update handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    formData.append('title', title);
    formData.append('description', description);
    formData.append('BlogCategoryId', BlogCategoryId);

    try {
      setError(null);
      setSuccess(false);

      const response = await axios.put(`https://blush.glow.api.ara-dreamhome.com/updateBlog/${data.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      });

      setSuccess(true);
      console.log('Blog updated successfully:', response.data);
      router.push('/dashboard/blog')

    } catch (error) {
      setError('Failed to update the blog.');
      console.error('Error updating blog:', error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading blog data.</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <Link href={'/dashboard/blog'}>Back to Dashboard</Link>
        <h1 className="text-2xl font-semibold mb-6 text-center">Update Blog Post</h1>
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
            {progress > 0 && <p className="text-sm text-blue-600 mt-2">Upload Progress: {progress}%</p>}
            {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
            {success && <p className="text-sm text-green-600 mt-2">Blog updated successfully!</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Category</label>
            <select
              name="category"

              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              required
              onChange={(e) => setBlogCategoryId(e.target.value)}
            >
              <option value={data?.blogCategory
                ?.title}> {data?.blogCategory
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
            Update Blog
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;

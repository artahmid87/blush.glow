import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useFindAllBlogCategoriesQuery } from '@/redux/api/Api';

const BlogPostForm = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [BlogCategoryId, setBlogCategoryId] = useState("")
  const formRef = useRef()



  const {data, isLoading, isError} =  useFindAllBlogCategoriesQuery()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('BlogCategoryId', BlogCategoryId);

    try {
      setError(null);
      setSuccess(false);

      const response = await axios.post('https://blush.glow.api.ara-dreamhome.com/uploadBlog', formData, {
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
      console.log('File uploaded successfully:', response.data);
      formRef.current.reset()
    } catch (error) {
      setError('Failed to upload the file.');
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Blog Post</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full">

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Title:</label>
            <textarea
              rows="4" cols="50"
              id="name"
              name="title"
              // value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              rows="4" cols="50"
              id="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images:</label>
            <input
              type="file"
              id="images"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />

            {/* Success message */}
            {progress > 0 && <p className="text-sm text-blue-600 mt-2">Upload Progress: {progress}%</p>}
            {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
            {success && <p className="text-sm text-green-600 mt-2">File uploaded successfully!</p>}
          </div>

          <div>
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <select
          name="category"
       
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          required
          onChange={(e) => setBlogCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>
          {
            data?.map((item) =>(
              <option
               value={item.id}
               key={item.id}
              >{item.title}</option>
            ))
          }
         
       
        </select>
      </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

  );
};

export default BlogPostForm;

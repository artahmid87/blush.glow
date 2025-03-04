import React, { useRef, useState } from 'react';
import { useCreatePostMutation, useFindAllBlogCategoriesQuery } from '@/redux/api/Api';
import TextEditor from './TextEditor';

const BlogPostForm = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [CategoryId, setCategoryId] = useState("")
  const formRef = useRef()
  

  const [postCreate ,{isLoading:loading , isSuccess , isError:isIssue}] = useCreatePostMutation()

  const {data, isLoading, isError} =  useFindAllBlogCategoriesQuery()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!file) {
        setError('Please select a file to upload.');
        return;
      }

      const formData = new FormData();
  
      formData.append('title', title);
      formData.append('file', file);
      formData.append('description', description);
      formData.append('CategoryId', CategoryId);

      await postCreate(formData).unwrap();

    } catch (error) {
      console.error('Booking failed', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Blog Post</h1>
        <form ref={formRef} onSubmit={handleSubmit}  className="space-y-6 w-full">
       
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
            <TextEditor value={description} onChange={setDescription} />
           
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
     
         
          </div>

          <div>
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <select
          name="category"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          required
          onChange={(e) => setCategoryId(e.target.value)}
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
          > {
            loading ? <> Uploading....</> : <>Submit</>
          }
        
          </button>

         <div>
         {isError && <p className="text-sm text-red-600 mt-2">Something went wrong!</p>}
         {isSuccess && <p className="text-sm text-green-600 mt-2">File uploaded successfully!</p>}
         </div>
        </form>
      </div>
    </div>

  );
};

export default BlogPostForm;

import React, { useRef, useState } from 'react';
import { useUploadGalleryMutation } from '@/redux/api/Api';

const UploadImg = () => {

  const [title, setTitle] = useState('')
  const [path, setPath] = useState(null);
  const formRef = useRef()

  const [gallery ,{isLoading , isSuccess , isError}] = useUploadGalleryMutation()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append('path', path);
      formData.append('title', title);

      await gallery(formData).unwrap();
      formRef.current.reset()
    } catch (error) {
      console.error('Booking failed', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Upload Gallery Image</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea 
              rows="4" cols="50"
              id="name"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter your title"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
          </div>
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images:</label>
            <input
              type="file"
              id="images"
              name="path"
              onChange={(e) => setPath(e.target.files[0])}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
             {
                isLoading ? (<h1>Uploading..</h1>) : (<h1>Submit</h1>)
              }          
          </button>
          <div>
            {
                isSuccess && (<h1 className='text-green-500 text-center'>Uploaded Successfully</h1>)
            }
            {
                isError && (<h1 className='text-red-500 text-center'>Something went wrong! </h1>)
            }
          </div>
        </form>
      </div>
    </div>

  );
};

export default UploadImg;

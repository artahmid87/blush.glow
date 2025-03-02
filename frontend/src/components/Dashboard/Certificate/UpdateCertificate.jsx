import React, { useEffect, useRef, useState } from 'react';
import { useGetCertificateByIdQuery, useUpdateCertificateMutation, } from '@/redux/api/Api';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UpdateCertificate = () => {

  const router =  useRouter()
  const id = router.query.id
  const {data, isError:error, isLoading:loading} =   useGetCertificateByIdQuery(id)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null);
  const formRef = useRef()


   useEffect(() => {
    if (data) {
      setTitle(data.title);
      setImage(data.image);
    }
  }, [data]);

  console.log(title)
  console.log(image)


  const [updateCertificate, { isLoading, isSuccess, isError }] = useUpdateCertificateMutation();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      if (image) {
        formData.append('image', image);
      }
      formData.append('title', title);
  
      await updateCertificate({ id, certificateUpdate: formData }).unwrap(); 
      router.push('/dashboard/certificate');
    } catch (error) {
      console.error('Update failed', error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
      <Link className='py-2 px-3 bg-blue-500 text-white' href={'/dashboard/certificate'}>Back To Dashboard</Link>
        <h1 className="text-2xl font-semibold py-6 text-center">Update Certificate Image</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Title:</label>
            <textarea 
              rows="4" cols="50"
              id="name"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter your title"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
          </div>
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Certificate:</label>
            <input
              type="file"
              id="images"
              name="image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
          >
             {
                isLoading ? (<h1 className='text-white'>Uploading..</h1>) : (<h1  className='text-white'>Submit</h1>)
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

export default UpdateCertificate;

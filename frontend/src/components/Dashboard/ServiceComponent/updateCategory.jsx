import React, { useEffect, useState } from 'react';
import { useGetCategoryByIdQuery, useUpdateCategoryMutation } from '@/redux/api/Api';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UpdateCategory = () => {

  const router =  useRouter()
  const id = router.query.id
  const {data, isError:error, isLoading:loading} =   useGetCategoryByIdQuery(id)


    const [title, setTitle] = useState('')
    const [shortInto, setShortInto] = useState("")
    const [icon, setIcon] = useState(null);


   useEffect(() => {
    if (data) {
      setTitle(data.title);
      setShortInto(data.shortInto);
      setIcon(data.icon);

    }
  }, [data]);


  const [updateCategory, { isLoading, isSuccess, isError }] = useUpdateCategoryMutation();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      if (file) {
        formData.append('icon', icon);
      }
      
      formData.append('title', title);
      formData.append('shortInto', shortInto);
   


      await updateCategory({ id, categoryUpdate:formData }).unwrap();

      router.push('/dashboard/category');
    } catch (error) {
      console.error('Update failed', error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
      <Link className='bg-blue-600 text-white py-2 px-4' href={'/dashboard/category'}>Back To Dashboard</Link>
        <h1 className="text-2xl font-semibold mb-6 text-center">Update Category name</h1>

        <form onSubmit={handleSubmit}  className="space-y-4">
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
              value={shortInto}
              onChange={(e) => setShortInto(e.target.value)}
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
              onChange={(e) => setIcon(e.target.files[0])}
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

export default UpdateCategory;


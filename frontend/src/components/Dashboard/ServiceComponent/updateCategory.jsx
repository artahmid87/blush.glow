import React, { useEffect, useState } from 'react';
import { useGetCategoryByIdQuery } from '@/redux/api/Api';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UpdateCategory = () => {

  const router =  useRouter()
  const id = router.query.id
  const {data, isError:error, isLoading:loading} =   useGetCategoryByIdQuery(id)

  const [title, setTitle] = useState('')


   useEffect(() => {
    if (data) {
      setTitle(data.title);
    }
  }, [data]);

  // update mutation form redux
  const [updateCategory, { isLoading, isSuccess, isError }] = useUpdateCategoryMutation();

  // update handler
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        const formData = new FormData();
      
      formData.append('title', title);
      await updateCategory({ id, catelog:formData }).unwrap();
      router.push('/dashboard/displayCategory');
    } catch (error) {
      console.error('Update failed', error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
      <Link className='bg-blue-600' href={'dashboard/gallery'}>Back To Dashboard</Link>
        <h1 className="text-2xl font-semibold mb-6 text-center">Update Category name</h1>

        <form onSubmit={handleSubmit}  className="space-y-4">
      <div>
        <label htmlFor="categoryName" className="block text-gray-700 font-semibold mb-1">
          Category Name
        </label>
        <input
          type="text"
          id="categoryName"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
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

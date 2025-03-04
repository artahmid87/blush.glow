import React, { useEffect, useState } from 'react';
import { useGetCategoryByIdQuery, useUpdateStatusMutation } from '@/redux/api/Api';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UpdateStatus = () => {

  const router = useRouter()
  const id = router.query.id
  const { data, isError: error, isLoading: loading } = useGetCategoryByIdQuery(id)

  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (data) {
      setIsActive(data.isActive);
    }
  }, [data]);

  const active = true
  const inActive = false


  const [updateStatus, { isLoading, isSuccess, isError }] = useUpdateStatusMutation();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (isActive) {
        formData.append('isActive', isActive);
      }

      await updateStatus({ id, statusUpdate: formData }).unwrap();

      router.push('/dashboard/category');
    } catch (error) {
      console.error('Update failed', error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <Link className='bg-blue-600 text-white py-2 px-6 mb-2' href={'/dashboard/category'}>Back To Dashboard</Link>
        <h1 className="text-2xl font-semibold my-6 text-center">Update Category Status</h1>
        <h1 > <span>Status:</span> <span className={`${data?.isActive ? "text-green-500" : "text-red-500"}`}>{data?.isActive ? "Active" : "Inactive"}</span></h1>

        <form onSubmit={handleSubmit} className="space-y-4">



          <div>
            <select
              name="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              required
              onChange={(e) => setIsActive(e.target.value)}
            >

              <option value=''> Select status</option>
              <option value={active}> Active</option>
              <option value={inActive}>Inactive</option>

            </select>

          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {
              isLoading ? (<h1>Uploading..</h1>) : (<h1 className='text-white'>Submit</h1>)
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

export default UpdateStatus;


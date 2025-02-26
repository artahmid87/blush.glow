import { useDeleteCategoryMutation, useFindAllCategoriesQuery } from '@/redux/api/Api';
import { Button, Popconfirm } from 'antd/dist/antd';
import Link from 'next/link';
import React, { useEffect } from 'react';

const DisplayCategory = () => {
  const { data, isLoading, isError, refetch } = useFindAllCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 1000);
    return () => clearInterval(interval);
  }, [refetch]);

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load categories.</p>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 bg-pink-500 text-white text-left text-sm font-semibold">Title</th>
            <th className="py-3 px-4 bg-pink-500 text-white text-left text-sm font-semibold">Image</th>
            <th className="py-3 px-4 bg-pink-500 text-white text-left text-sm font-semibold">Description</th>
            <th className="py-3 px-4 bg-pink-500 text-white text-left text-sm font-semibold">Status</th>
            <th className="py-3 px-4 bg-pink-500 text-white text-left text-sm font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((category) => (
            <tr key={category.id} className={`border-b border-gray-200 ${category?.isActive ? '' : 'hidden'}`}>
              <td className="py-3 px-4 text-gray-700 truncate max-w-xs">{category.title}</td>
              <td className="px-4 py-3">
                <img
                  src={`http://localhost:5000/images/service_img/${category?.icon}`}
                  alt={category?.title}
                  className="w-20 h-20 object-cover mx-auto rounded-lg shadow-md"
                />
              </td>
              <td className="py-3 px-4 text-gray-700 truncate max-w-xs">{category.shortInto}</td>
              <td className="py-3 px-4">
                <Link href={`/dashboard/updateStatus/${category.id}`}>
                  <Button className="bg-yellow-300 text-blue-500 px-3 py-1 rounded-full hover:bg-yellow-400 text-sm">
                    Status
                  </Button>
                </Link>
              </td>
              <td className="px-4 py-3 flex flex-wrap gap-2">
                <Link href={`/dashboard/updateCategory/${category.id}`}>
                  <Button className="bg-yellow-300 text-blue-500 px-3 py-1 rounded-full hover:bg-yellow-400 text-sm">
                    Update
                  </Button>
                </Link>
                <Popconfirm
                  title="Delete the Image"
                  description="Are you sure to delete this Category?"
                  onConfirm={() => handleDelete(category.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className='px-4 py-1 bg-rose-500 rounded-full text-white hover:bg-white hover:text-red-500 transition-all'>
                    Delete
                  </Button>
                </Popconfirm>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayCategory;

import { useDeleteCategoryMutation, useFindAllCategoriesQuery } from '@/redux/api/Api';
import { Button, Popconfirm } from 'antd/dist/antd';
import Link from 'next/link';
import React from 'react';

const DisplayCategory = () => {
  const { data, isLoading, isError } = useFindAllCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id).unwrap()
    } catch (error) {
      console.log(error)
    }
    window.location.reload()
  };


  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load categories.</p>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-pink-500 text-white text-left text-sm font-semibold">Category Name</th>
            <th className="py-2 px-4 bg-pink-500 text-white text-left text-sm font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((category) => (
            <tr key={category.id} className="border-b border-gray-200">
              <td className="py-2 px-4 text-gray-700">{category.title}</td>
              <td className="px-4 flex flex-col md:flex-row justify-end gap-4 py-2">
            
                    <Popconfirm
                      title="Delete the Image"
                      description="Are you sure to delete this Category?"
                      onConfirm={() => handleDelete(category.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button
                        className='px-4 py-1 bg-rose-500 rounded-3xl text-white hover:bg-white hover:text-red-500 transition-all'
                      >
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

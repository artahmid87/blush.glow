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
    <div className="p-4">
      <h2 className="text-center text-pink-500 text-2xl font-bold mb-4">{data?.length} Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-gray-800 font-semibold truncate w-full text-center">{category.title}</h3>
            <img
              src={`http://localhost:5000/images/service_img/${category?.icon}`}
              alt={category?.title}
              className="w-full h-32 object-cover my-2 rounded-lg"
            />
            <p className="text-gray-600 text-sm truncate w-full">{category.shortInto}</p>
            <p className={`${category?.isActive ? 'text-green-500' : 'text-red-500'}`}>{category?.isActive ? 'Active' : 'Inactive'}</p>
            <Link href={`/dashboard/updateStatus/${category.id}`} className="w-full">
              <Button className="bg-green-300 text-blue-500 px-3 py-1 rounded-full hover:bg-yellow-400 text-sm w-full">
                Status
              </Button>
            </Link>
            <div className="flex gap-2 mt-4 w-full">
              <Link href={`/dashboard/updateCategory/${category.id}`} className="w-full">
                <Button className="w-full bg-yellow-300 text-blue-500 px-3 py-1 rounded-full hover:bg-yellow-400 text-sm">
                  Update
                </Button>
              </Link>
              <Popconfirm
                title="Delete the Category"
                description="Are you sure to delete this Category?"
                onConfirm={() => handleDelete(category.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button className='w-full px-4 py-1 bg-rose-500 rounded-full text-white hover:bg-white hover:text-red-500 transition-all'>
                  Delete
                </Button>
              </Popconfirm>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayCategory;

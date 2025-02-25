import {  useDeletePriceMutation, useFindAllPriceQuery } from '@/redux/api/Api';
import { Button, Popconfirm } from 'antd/dist/antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const DisplayService = () => {
  const { data, isLoading, isError, refetch } = useFindAllPriceQuery();

  useEffect(() => {
    const interval = setInterval(() =>{
     refetch()
    }, 1000)
    return () => clearInterval(interval)
   }, [refetch])
 
  const [deletePrice] = useDeletePriceMutation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePrice(id).unwrap();
      refetch()
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="w-full h-16 bg-pink-500 py-4 mb-4">
        <h1 className="text-2xl font-bold text-center text-white">{data?.length} Services</h1>
      </div>

      <div>
        <ul className='flex justify-evenly py-2'>
          <Link href={'/dashboard/displayServices'}><li className="bg-blue-500 rounded-md text-white px-4 py-1 hover:bg-blue-300 transition-all">List</li></Link>
          <Link href={'/dashboard/category'}><li className="bg-blue-500 rounded-md text-white px-4 py-1 hover:bg-blue-300 transition-all">Category</li></Link>
          <Link href={'/dashboard/addPrice'}><li className="bg-blue-500 rounded-md text-white px-4 py-1 hover:bg-blue-300 transition-all">Add</li></Link>
        </ul>
      </div>

      {/* Content */}
      <div className={isMobile ? 'grid gap-4' : 'overflow-x-auto'}>
        {isMobile ? (
          // Mobile view as cards
          data?.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
             
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <img
                src={"https://blush.glow.api.ara-dreamhome.com/images/service_img/" + item.image}
                alt={item.title}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <p className="text-gray-700">{item.price}</p>
              <p className="text-gray-700">{item.shortInfo}</p>
              <p className="text-gray-700">{item?.categories?.title}</p>
              <div className="flex justify-between mt-4">
                <Link href={`/dashboard/updatePrice/${item.id}`}>
                  <Button className="bg-yellow-300 text-blue-500 px-3 py-1 rounded-full hover:bg-yellow-400 text-sm">
                    Update
                  </Button>
                </Link>
                <Popconfirm
                  title="Delete the Blog"
                  description="Are you sure to delete this Price?"
                  onConfirm={() => handleDelete(item.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="bg-rose-500 text-white px-3 py-1 rounded-full hover:bg-red-600 text-sm">
                    Delete
                  </Button>
                </Popconfirm>
              </div>
            </div>
          ))
        ) : (
          // Desktop and Tablet view as a table
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300">Image</th>
                <th className="px-4 py-2 border border-gray-300">Title</th>
                <th className="px-4 py-2 border border-gray-300">price</th>
                <th className="px-4 py-2 border border-gray-300">Description</th>
                <th className="px-4 py-2 border border-gray-300">Category</th>
                <th className="px-4 py-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index} className="text-center">
                    <td className="px-4 py-2 border border-gray-300">
                    <img
                      src={"https://blush.glow.api.ara-dreamhome.com/images/service_img/" + item?.image}
                      alt={item?.title}
                      className="w-16 h-16 mx-auto object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">{item?.title}</td>
                
                  <td className="px-4 py-2 border border-gray-300">{item?.price}</td>
                
                  <td className="px-4 py-2 border border-gray-300">{item?.shortInfo}</td>
                  <td className="px-4 py-2 border border-gray-300">{item?.categories?.title}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex flex-col items-center space-y-2">
                      <Link href={`/dashboard/updatePrice/${item.id}`}>
                        <Button className="bg-yellow-300 text-blue-500 px-2 py-1 rounded-full hover:bg-yellow-400">
                          Update
                        </Button>
                      </Link>
                      <Popconfirm
                        title="Delete the Service"
                        description="Are you sure to delete this Service?"
                        onConfirm={() => handleDelete(item.id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button className="bg-rose-500 text-white px-2 py-1 rounded-full hover:bg-red-600">
                          Delete
                        </Button>
                      </Popconfirm>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DisplayService;

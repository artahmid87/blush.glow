import { useDeleteCertificateMutation, useGetAllCertificateQuery } from '@/redux/api/Api';
import { Popconfirm, Button } from 'antd/dist/antd';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Certificate = () => {
  const { data, isSuccess, isError, isLoading, refetch } = useGetAllCertificateQuery();

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 3000); 
    return () => clearInterval(interval);
  }, [refetch]);

  const [deleteCertificate] = useDeleteCertificateMutation();

  const handleDelete = async (id) => {
    try {
      await deleteCertificate(id).unwrap();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="w-full bg-pink-500 py-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-white">
          {data?.length} Certificates
        </h1>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {data?.map((item, index) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 border">
            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img
                src={`http://localhost:5000/images/certificate_img/${item.image}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-center mt-2">{item?.title?.slice(0, 25)}...</h2>

           

            {/* Actions */}
            <div className="flex justify-between items-center mt-3">
              <Link
                href={`/dashboard/certificate/${item.id}`}
                className="py-1 px-3 bg-yellow-400 rounded-full text-sm text-black hover:bg-yellow-300 transition-all"
              >
                Update
              </Link>

              <Popconfirm
                title="Delete Certificate"
                description="Are you sure you want to delete this certificate?"
                onConfirm={() => handleDelete(item.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  className="px-3 py-1 bg-rose-500 rounded-full text-white hover:bg-red-600 transition-all"
                >
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

export default Certificate;

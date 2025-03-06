import ApiUrl from '@/components/ui/APIURL'
import { useDeleteGalleryMutation, useGetAllGalleryQuery } from '@/redux/api/Api'
import { Popconfirm, Button } from 'antd/dist/antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Gallery = () => {
  const { data, refetch } = useGetAllGalleryQuery()


  const [deleteGallery] = useDeleteGalleryMutation();

  const handleDelete = async (id) => {
    try {
      await deleteGallery(id).unwrap()
      refetch()
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className=''>
      <div className='w-full h-16 bg-pink-500 py-4 '>
        <h1 className='text-2xl font-bold text-center text-white'> {data?.length} Gallery Images</h1>
      </div>

      <div className='w-full flex items-center'>
        <div className="overflow-x-auto flex justify-center items-center w-full">
          <table className="min-w-full table-auto border-collapse border border-gray-200 ">
            <thead className='w-full'>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300">Title</th>
                <th className="px-4 py-2 border border-gray-300">Image</th>
                <th className="px-4 py-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td className="px-4 py-2 border border-gray-300">{item?.title?.slice(0, 50)}...</td>
                  <td className="px-4 py-2 border border-gray-300">

                    <Image
                      src={`${ApiUrl}/images/gallery_img/${item?.path}`}
                      alt="A beautiful scenery"
                      width={300}
                      height={300}
                      priority
                      className="w-40 h-40 mx-auto object-cover"
                    />
                  </td>

                  <td className="px-4 flex flex-col py-2 border border-gray-300">
                    <Link className='py-1 mb-2 px-1 bg-yellow-300 rounded-full hover:bg-white hover:text-blue-500 border border-blue-400 text-[14px]' href={`/dashboard/gallery/${item.id}`} >Update</Link>
                    <Popconfirm
                      title="Delete the Image"
                      description="Are you sure to delete this Image?"
                      onConfirm={() => handleDelete(item.id)}
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
      </div>
    </div>
  )
}
export default Gallery
import { AppointmentIcon, BlogIcon, GalleryIcon, MakeUpIcon } from '@/components/ui/icon';
import { useBookingListQuery, useFindAllPriceQuery, useGetAllGalleryQuery, useGetBlogQuery } from '@/redux/api/Api';
import React, { useEffect } from 'react'

 const InformationData = () => {

    const { data:blog, isLoading:bloading, isError:blogError, refetch:bRefrash } = useGetBlogQuery();
    const { data:book, isLoading:bookinLoading, isError:bookingError, refetch:BookingRefreash } = useBookingListQuery();

    const { data:gallery, refetch:galleryRefrash } = useGetAllGalleryQuery()
    const { data:service,  refetch:serviceRefreash } = useFindAllPriceQuery();


    useEffect(() => {
        const interval = setInterval(() =>{
            bRefrash()
            BookingRefreash()
            galleryRefrash()
            serviceRefreash()
        }, 1000)
        return () => clearInterval(interval)
       }, [bRefrash, BookingRefreash, galleryRefrash, serviceRefreash])
     


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className = "bg-[#8a8dff] py-6 px-6 mt-4 rounded-md">
            <div className="flex flex-col justify-center items-center h-[70%] ">
               <span className="bg-white p-8 text-blue-500 text-3xl rounded-full"> <AppointmentIcon/></span>
            </div>
        <div className="flex justify-between text-white font-semibold mt-4 px-10">
        <span>Appointment</span><span>{book?.length}</span>
        </div>
        </div>

        <div className = "bg-[#f9c24e] py-6 px-6 mt-4 rounded-md">
            <div className="flex flex-col justify-center items-center h-[70%] ">
               <span className="bg-white p-8 text-blue-500 text-3xl rounded-full"> <BlogIcon/></span>
            </div>
        <div className="flex justify-between text-white font-semibold mt-4 px-10">
        <span>Blog</span><span>{blog?.length}</span>
        </div>
        </div>

        <div className = "bg-[#52a5fc] py-6 px-6 mt-4 rounded-md">
            <div className="flex flex-col justify-center items-center h-[70%] ">
               <span className="bg-white p-8 text-blue-500 text-3xl rounded-full"> <GalleryIcon/></span>
            </div>
        <div className="flex justify-between text-white font-semibold mt-4 px-10">
        <span>Gallery</span><span>{gallery?.length}</span>
        </div>
        </div>
        <div className = "bg-[#efa3ff] py-6 px-6 mt-4 rounded-md">
            <div className="flex flex-col justify-center items-center h-[70%] ">
               <span className="bg-white p-8 text-blue-500 text-3xl rounded-full"> <MakeUpIcon/></span>
            </div>
        <div className="flex justify-between text-white font-semibold mt-4 px-10">
        <span>Service</span><span>{service?.length}</span>
        </div>
        </div>

         
         
    </div>
  )
}

export default InformationData

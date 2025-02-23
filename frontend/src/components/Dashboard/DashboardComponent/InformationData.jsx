import { AppointmentIcon, BlogIcon, MakeUpIcon } from '@/components/ui/icon';
import { useBookingListQuery, useFindAllPriceQuery, useGetAllGalleryQuery, useGetBlogQuery } from '@/redux/api/Api';
import React, { useEffect, useState } from 'react'
import { Table } from 'antd/dist/antd'; import Link from 'next/link';
;

const { Column } = Table;

const InformationData = () => {

    const { data: blog, refetch: bRefrash } = useGetBlogQuery();
    const { data: book, refetch: BookingRefreash } = useBookingListQuery();
    const { data: gallery, refetch: galleryRefrash } = useGetAllGalleryQuery();
    const { data: service, refetch: serviceRefreash } = useFindAllPriceQuery();
    const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            bRefrash();
            BookingRefreash();
            galleryRefrash();
            serviceRefreash();
        }, 1000);
        return () => clearInterval(interval);
    }, [bRefrash, BookingRefreash, galleryRefrash, serviceRefreash]);

    useEffect(() => {
        const handleResize = () => {
            setIsTabletOrMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const latestBookings = Array.isArray(book) ? [...book].reverse().slice(0, 4) : [];

    return (
        <div className="space-y-4">
            <Link href={'dashboard/appointment'}>
                <div className="bg-[#8a8dff] p-6 mt-4 rounded-md">
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-1/3 flex flex-col items-center mb-4 lg:mb-0">
                            <span className="bg-white p-8 text-blue-500 text-3xl rounded-full">
                                <AppointmentIcon />
                            </span>
                            <div className="flex justify-between text-white font-semibold mt-4 gap-1">
                                <span>Appointment</span>
                                <span>{book?.length}</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3 overflow-x-auto">
                            {isTabletOrMobile ? (
                                <div className="grid gap-4">
                                    {latestBookings?.map((record) => (
                                        <div key={record.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                            <h2 className="text-lg font-bold mb-2">{record.name}</h2>
                                            <p><strong>Email:</strong> {record.email}</p>
                                            <p><strong>Phone:</strong> {record.phone}</p>
                                            <p><strong>Date:</strong> {record.date}</p>
                                            <p><strong>Time:</strong> {record.time}</p>
                                            <p><strong>Price:</strong> {record.price}</p>
                                            <p><strong>Description:</strong> {record.description}</p>

                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <Table
                                    dataSource={latestBookings}
                                    pagination={false}
                                    className="w-full"
                                    scroll={{ x: '100%' }}
                                >
                                    <Column title="Name" dataIndex="name" key="name" />
                                    <Column title="Email" dataIndex="email" key="email" />
                                    <Column title="Phone" dataIndex="phone" key="phone" />
                                    <Column title="Date" dataIndex="date" key="date" />
                                    <Column title="Time" dataIndex="time" key="time" />
                                    <Column title="Price" dataIndex="price" key="price" />
                                    <Column title="Description" dataIndex="description" key="description" />
                                </Table>
                            )}
                        </div>
                    </div>
                </div>

            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                {[
                    { icon: <MakeUpIcon />, color: '#efa3ff', title: 'Service', count: service?.length, link: 'dashboard/displayServices' },
                    { icon: <BlogIcon />, color: '#f9c24e', title: 'Blog', count: blog?.length, link: 'dashboard/blog' },
                ].map((item, index) => (
                    <Link href={item.link}>
                        <div key={index} className={`py-6 px-6 mt-4 rounded-md`} style={{ backgroundColor: item.color }}>
                            <div className="flex flex-col items-center h-[70%]">
                                <span className="bg-white p-8 text-blue-500 text-3xl rounded-full">
                                    {item.icon}
                                </span>
                            </div>
                            <div className="flex justify-between text-white font-semibold mt-4 px-10">
                                <span>{item.title}</span>
                                <span>{item.count}</span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

            <Link href={'dashboard/gallery'}>
                <div className="bg-[#8a8dff] p-6 mt-4 rounded-md">
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-1/3 flex flex-col items-center mb-4 lg:mb-0">
                            <span className="bg-white p-8 text-blue-500 text-3xl rounded-full">
                                <AppointmentIcon />
                            </span>
                            <div className="flex justify-between text-white font-semibold mt-4 gap-1">
                                <span>Gallery</span>
                                <span>{book?.length}</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3 overflow-x-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                                {gallery?.slice(0, 4).map((item, index) => (
                                    <div key={index} className="flex">
                                        <img
                                            src={`http://localhost:5000/images/gallery_img/${item?.path}`}
                                            alt={item?.title}
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </Link>



        </div>
    );
};

export default InformationData;

import { AppointmentIcon, BlogIcon, MakeUpIcon } from '@/components/ui/icon';
import { useBookingListQuery, useFindAllPriceQuery, useGetAllGalleryQuery, useGetBlogQuery } from '@/redux/api/Api';
import React, { useEffect, useState } from 'react'
import { Table } from 'antd/dist/antd'; import Link from 'next/link';
import ApiUrl from '@/components/ui/APIURL';
import Image from 'next/image';
;

const { Column } = Table;

const InformationData = () => {

    const { data: blog, } = useGetBlogQuery();
    const { data: book, } = useBookingListQuery();
    const { data: gallery, } = useGetAllGalleryQuery();
    const { data: service, } = useFindAllPriceQuery();
    const [tabMobile, setTabMobile] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setTabMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const latestBook = Array.isArray(book) ? [...book].reverse().slice(0, 4) : [];

    return (
        <div className="space-y-4">
            <Link href={'dashboard/appointment'}>
                <div className="bg-[#0cb2ef28] p-6 mt-4 rounded-md">
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-1/3 flex flex-col items-center mb-4 lg:mb-0">
                            <span className="bg-white p-8 text-blue-500 text-3xl rounded-full">
                                <AppointmentIcon />
                            </span>
                            <div className="flex justify-between font-semibold mt-4 gap-1 text-black">
                                <h1>Appointment</h1>
                                <span>{book?.length}</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3 overflow-x-auto">
                            {tabMobile ? (
                                <div className="grid gap-4">
                                    {latestBook?.map((record) => (
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
                                    dataSource={latestBook}
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
                    { icon: <MakeUpIcon />, color: '#d5b4dc', title: 'Service', count: service?.length, link: 'dashboard/displayServices' },
                    { icon: <BlogIcon />, color: '#d5b4dc', title: 'Blog', count: blog?.length, link: 'dashboard/blog' },
                ].map((item, index) => (
                    <Link href={item.link} key={index}>
                        <div className={`py-6 px-6 mt-4 rounded-md`} style={{ backgroundColor: item.color }}>
                            <div className="flex flex-col items-center h-[70%]">
                                <span className="bg-white p-8 text-blue-500 text-3xl rounded-full">
                                    {item.icon}
                                </span>
                            </div>
                            <div className="flex justify-center gap-2 text-black font-bold mt-4 px-10">
                                <span>{item.title}</span>
                                <span>{item.count}</span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

            <Link href={'dashboard/gallery'}>
                <div className="bg-[#0cb2ef28] p-6 mt-4 rounded-md">
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-1/3 flex flex-col items-center mb-4 lg:mb-0">
                            <span className="bg-white p-8 text-blue-500 text-3xl rounded-full">
                                <AppointmentIcon />
                            </span>
                            <div className="flex justify-between font-semibold mt-4 gap-1 text-black">
                                <span>Gallery</span>
                                <span>{book?.length}</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3 overflow-x-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                                {gallery?.slice(0, 4).map((item, index) => (
                                    <div key={index} className="flex">

                                        <Image
                                            src={`${ApiUrl}/images/gallery_img/${item?.path}`}
                                            
                                            alt={item?.title}
                                            width={500}
                                            height={500}
                                            priority
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

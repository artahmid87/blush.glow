import { useBookingListQuery, useDeleteBookingMutation } from '@/redux/api/Api';
import { Space, Table } from 'antd/dist/antd';
import { Button, Popconfirm } from 'antd/dist/antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const { Column } = Table;

const AppointmentList = () => {
  const { data, isLoading, isError, refetch } = useBookingListQuery();
  const [deleteBooking] = useDeleteBookingMutation();
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleDelete = async (id) => {
    try {
      await deleteBooking(id).unwrap();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };


  const filteredData = data?.filter((item) =>
  
    item.email.toLowerCase().includes(searchTerm) ||
    item.phone.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-4">
      {/* Header */}
      <div className="w-full h-16 bg-pink-500 py-4 mb-4">
        <h1 className="text-2xl font-bold text-center text-white">
          {filteredData?.length} Clients Available
        </h1>
      </div>

      {/* Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by email or phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          className="p-2 border rounded-lg w-full max-w-md"
        />
      </div>

      {/* Content */}
      <div className={isTabletOrMobile ? 'overflow-x-auto' : ''}>
        {isTabletOrMobile ? (
          // Mobile View
          <div className="grid gap-4">
            {filteredData?.map((record) => (
              <div key={record.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-2">{record.name}</h2>
                <p><strong>Email:</strong> {record.email}</p>
                <p><strong>Phone:</strong> {record.phone}</p>
                <p><strong>Date:</strong> {record.date}</p>
                <p><strong>Time:</strong> {record.time}</p>
                <p><strong>Price:</strong> {record.price}</p>
                <p><strong>Description:</strong> {record.description}</p>
                <div className="flex justify-between mt-4">
                  <Popconfirm
                    title="Delete the Booking"
                    description="Are you sure to delete this Booking?"
                    onConfirm={() => handleDelete(record.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button className="px-4 py-1 bg-rose-500 rounded-3xl text-white hover:bg-white hover:text-red-500 transition-all">
                      Delete
                    </Button>
                  </Popconfirm>
                  <Link
                    href={{
                      pathname: '/dashboard/confirmationBooking/[id]',
                      query: { id: record.id },
                    }}
                    as={`/dashboard/confirmationBooking/${record.id}`}
                  >
                    <Button className="px-4 py-1 bg-yellow-400 rounded-3xl text-white hover:bg-white hover:text-yellow-400 transition-all">
                      Confirm
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop View
          <Table
            dataSource={filteredData}
            pagination={{ pageSize: 20 }}
            className="w-full"
            scroll={{ x: isTabletOrMobile ? '100%' : undefined }}
            rowKey="id"
          >
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Email" dataIndex="email" key="email" />
            <Column title="Phone" dataIndex="phone" key="phone" />
            <Column title="Date" dataIndex="date" key="date" />
            <Column title="Time" dataIndex="time" key="time" />
            <Column title="Price $" dataIndex="price" key="price" />
            <Column title="Description" dataIndex="description" key="description" />
            <Column
              title="Action"
              key="action"
              render={(_, record) => (
                <Space size="middle">
                  <Popconfirm
                    title="Delete the Booking"
                    description="Are you sure to delete this Booking?"
                    onConfirm={() => handleDelete(record.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button className="px-4 py-1 bg-rose-500 rounded-3xl text-white hover:bg-white hover:text-red-500 transition-all">
                      Delete
                    </Button>
                  </Popconfirm>
                  <Link
                    href={{
                      pathname: '/dashboard/confirmationBooking/[id]',
                      query: { id: record.id },
                    }}
                    as={`/dashboard/confirmationBooking/${record.id}`}
                  >
                    <Button className="px-4 py-1 bg-yellow-400 rounded-3xl text-white hover:bg-white hover:text-yellow-400 transition-all">
                      Confirm
                    </Button>
                  </Link>
                </Space>
              )}
            />
          </Table>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;

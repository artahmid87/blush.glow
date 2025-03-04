import Container from "@/components/ui/Container";
import { useDeleteHolidayMutation, useGetAllHolidayQuery } from "@/redux/api/Api";
import { Popconfirm, Button, Card } from 'antd';
import { useEffect } from "react";

const ShowHoliday = () => {
    const { data, refetch } = useGetAllHolidayQuery();

    useEffect(() => {
        const interval = setInterval(() => {
            refetch();
        }, 1000);
        return () => clearInterval(interval);
    }, [refetch]);

    const [deleteHoliday] = useDeleteHolidayMutation();

    const handleDelete = async (id) => {
        try {
            await deleteHoliday(id).unwrap();
            refetch();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.map((item) => (
                    <Card key={item.id} className="p-4 shadow-md bg-white rounded-lg">
                        <h2 className="text-lg font-bold">{item?.name}</h2>
                        
                        
                        <p><strong>Date:</strong> {item?.fromDate} To {item?.toDate}</p>
                        <p><strong>Time:</strong> {item?.fromTime} To {item?.toTime}</p>
                        
                        <div className="flex justify-between mt-4">
                            <Popconfirm
                                title="Delete the Holiday"
                                description="Are you sure to delete this Holiday?"
                                onConfirm={() => handleDelete(item.id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button className="bg-rose-500 text-white px-4 py-1 rounded-lg hover:bg-rose-600">
                                    Delete
                                </Button>
                            </Popconfirm>
                           
                        </div>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default ShowHoliday;
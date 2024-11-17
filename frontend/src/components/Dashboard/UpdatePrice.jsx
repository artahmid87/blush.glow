import React, { useEffect, useRef, useState } from 'react';
import { useFindAllCategoriesQuery, useGetCategoryByIdQuery, useGetPriceByIdQuery, useUpdatePricesMutation, } from '@/redux/api/Api';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UpdatePrice = () => {

    const router = useRouter()
    const id = router.query.id

    const { data, isError: error, isLoading: loading } = useGetPriceByIdQuery(id)
    const { data: caregory, isError: issue } = useFindAllCategoriesQuery()



    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [CategoryId, setCategoryId] = useState("")
    const [image, setImage] = useState(null);


    //store previous data in useState
    useEffect(() => {
        if (data) {
            setTitle(data?.title);
            setImage(data?.image);
            setPrice(data?.price)
            setCategoryId(data?.CategoryId)
        }
    }, [data]);

    // update mutation form redux
    const [updatePrices, { isLoading, isSuccess, isError }] = useUpdatePricesMutation();

    // update handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            if (image) {
                formData.append('image', image);
            }
            formData.append('title', title);
            formData.append('price', price);
            formData.append('CategoryId', CategoryId);

            await updatePrices({ id, pricePut: formData }).unwrap();
            router.push('/dashboard/displayServices');
        } catch (error) {
            console.error('Update failed', error);
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen  bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <Link href={'dashboard/gallery'}>Back To Dashboard</Link>
                <h1 className="text-2xl font-semibold mb-6 text-center">Update Price</h1>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            placeholder="Enter title"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Price</label>
                        <input
                            type="text"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            placeholder="Enter price"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="images" className="block text-sm font-medium text-gray-700">Image:</label>
                        <input
                            type="file"
                            id="images"
                            name="image"

                            onChange={(e) => setImage(e.target.files[0])}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Category</label>
                        <select
                            name="category"

                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            required
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            <option value={data?.categories
                                ?.title}> {data?.categories
                                    ?.title}</option>
                            {
                                caregory?.map((item) => (

                                    <option
                                    value={item?.id}
                                        key={item?.id}
                                    >{item?.title}</option>




                                ))

                            }


                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        {
                            loading ? <>Updating...</> : <>Update</>
                        }
                    </button>

                    {isError && <p className="text-red-500 mt-2">Something Went Wrong!</p>}
                    {isSuccess && <p className="text-green-500 mt-2">Form Updated successfully!</p>}
                </form>
            </div>
        </div>

    );
};

export default UpdatePrice;

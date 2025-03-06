import { useCreatePriceMutation, useFindAllCategoriesQuery } from '@/redux/api/Api';
import { useState } from 'react';


const AddPrice = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [CategoryId, setCategoryId] = useState("")
  const [shortInfo, setShortInfo] = useState("")
  const [image, setImage] = useState(null);


  const {data} =  useFindAllCategoriesQuery()
  
  const [pricePlan ,{isLoading:loading , isSuccess , isError:isIssue}] = useCreatePriceMutation()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
  
      formData.append('title', title);
      formData.append('image', image);
      formData.append('price', price);
      formData.append('CategoryId', CategoryId);
      formData.append('shortInfo', shortInfo);
    

      await pricePlan(formData).unwrap();

    } catch (error) {
      console.error('Booking failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}  className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          placeholder="Enter title"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Price</label>
        <input
          type="number"
          name="price"
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
              name="path"
             
              onChange={(e) => setImage(e.target.files[0])}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              rows="4" cols="50"
              id="description"
              name="description"
              onChange={(e) => setShortInfo(e.target.value)}
              placeholder="Description"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <select
          name="category"
       
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          required
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>
          {
            data?.map((item) =>(
              <option
               value={item.id}
               key={item.id}
              >{item.title}</option>
            ))
          }
         
       
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
      {
        loading ? <>Uploading...</> : <>Upload</>
      }
      </button>

      {isIssue && <p className="text-red-500 mt-2">Something Went Wrong!</p>}
      {isSuccess && <p className="text-green-500 mt-2">Form submitted successfully!</p>}
    </form>
  );
};

export default AddPrice;

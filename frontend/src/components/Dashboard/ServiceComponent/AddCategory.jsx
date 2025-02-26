import { useCreateCategoryMutation, useFindAllCategoriesQuery } from '@/redux/api/Api';
import React, { useRef, useState } from 'react'

 const CrudCategory = () => {
  const [title, setTitle] = useState('')
  const [shortInto, setShortInto] = useState("")
  const [icon, setIcon] = useState(null);
  const formRef = useRef()

  const [category ,{isLoading , isSuccess , isError}] = useCreateCategoryMutation()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
  
      formData.append('title', title);
      formData.append('icon', icon);

      formData.append('shortInto', shortInto);

      await category(formData).unwrap();
  
    } catch (error) {
      console.error( error);
    }
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Category</h2>
    <form onSubmit={handleSubmit}  className="space-y-4">
      <div>
        <label htmlFor="categoryName" className="block text-gray-700 font-semibold mb-1">
          Category Name
        </label>
        <input
          type="text"
          id="categoryName"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Icon:</label>
            <input
              type="file"
              id="images"
              name="path"
             
              onChange={(e) => setIcon(e.target.files[0])}
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
              onChange={(e) => setShortInto(e.target.value)}
              placeholder="Description"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

      <button
        type="submit"
        className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition"
       
      >
       {
        isLoading ? <>Uploading</> : <>Add</>
       }
      </button>
    </form>

    {isSuccess && (
      <p className="mt-4 text-green-600 font-semibold">Category uploaded successfully!</p>
    )}
    {isError && (
      <p className="mt-4 text-red-600 font-semibold"> Something Went Wrong! </p>
    )}
  </div>
  )
}
export default CrudCategory




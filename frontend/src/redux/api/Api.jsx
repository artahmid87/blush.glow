import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://blush.glow.api.ara-dreamhome.com/'
    baseUrl: 'https://blush.glow.api.ara-dreamhome.com/'

  }),
  endpoints: (builder) => ({
    // Appointment booking api
    bookingList: builder.query({
      query: () => '/appointment/get/customer'
    }),


    getBookingById: builder.query({
      query: (id) => `/appointment/get/${id}`,
    }),

    // Update booking with sending a confirmation email
    updateBooking: builder.mutation({
      query: ({ id, booking }) => ({
        url: `/appointment/confirmBooking/${id}`,
        method: 'PUT',
        body: booking,
      }),
    }),

    // review get api
    review: builder.query({
      query: () => '/review'
    }),

    // All Blog
    getBlog: builder.query({
      query: () => "/getBlog",
    }),

    // single blog by id
    getBlogById: builder.query({
      query: (id) => `/getById/${id}`,
    }),

    //Booking post api
    createBooking: builder.mutation({
      query: (booking) => ({
        url: '/appointment/booking',
        method: 'POST',
        body: booking,
      }),
    }),

    //Blog post api
    blogPost: builder.mutation({
      query: (post) => ({
        url: '/uploadBlog',
        method: 'POST',
        body: post,
      }),
    }),



     //Blog Category post api
     createBlogCategory: builder.mutation({
      query: (category) => ({
        url: '/createBlogCategory',
        method: 'POST',
        body: category,
      }),
    }),

    //Blog  get category api
    findAllBlogCategories: builder.query({
      query: () => '/findBlogCategories'
    }),
    //Blog category get By ID api
    getBlogCategoryById: builder.query({
      query: (id) => `/findBlogCategory/${id}`
    }),



    //Blog Category delete api
    deleteBlogCategory: builder.mutation({
      query: (id) => ({
        url: `/deleteBlogCategory/${id}`,
        method: 'DELETE',
      }),
    }),






    //Category post api
    createCategory: builder.mutation({
      query: (category) => ({
        url: '/createCategory',
        method: 'POST',
        body: category,
      }),
    }),

    //  get category api
    findAllCategories: builder.query({
      query: () => '/findCategories'
    }),
    // category get By ID api
    getCategoryById: builder.query({
      query: (id) => `/findCategory/${id}`
    }),



    //Category delete api
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/deleteCategory/${id}`,
        method: 'DELETE',
      }),
    }),


    //Price post api
    createPrice: builder.mutation({
      query: (pricePlan) => ({
        url: '/createPrice',
        method: 'POST',
        body: pricePlan,
      }),
    }),

    //  get category api
    findAllPrice: builder.query({
      query: () => '/findPrices'
    }),

    //Category Update api
    updatePrices: builder.mutation({
      query: ({id, pricePut}) => ({
        url: `/updatePrices/${id}`,
        method: 'PUT',
        body: pricePut,
      }),
    }),

   
     // gallery get By ID api
     getPriceById: builder.query({
      query: (id) => `/findPrices/${id}`
    }),

      //Price delete api
      deletePrice: builder.mutation({
        query: (id) => ({
          url: `/deletePrice/${id}`,
          method: 'DELETE',
        }),
      }),

    //Blog Update api
    updateBlog: builder.mutation({
      query: (id, update) => ({
        url: `/updateBlog/${id}`,
        method: 'PUT',
        body: update,
      }),
    }),

    //Blog delete api
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/deleteBlog/${id}`,
        method: 'DELETE',
      }),
    }),

    //booking delete api
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/appointment/delete/booking/${id}`,
        method: 'DELETE',
      }),

    }),

    //admin login api
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: '/admin/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    //Gallery post api
    uploadGallery: builder.mutation({
      query: (gallery) => ({
        url: '/galleryUpload',
        method: 'POST',
        body: gallery,
      }),
    }),
    // gallery get api
    getAllGallery: builder.query({
      query: () => '/getGallery'
    }),
    // gallery get By ID api
    getGalleryById: builder.query({
      query: (id) => `/getGelleryById/${id}`
    }),
    //Gallery Update api
    updateGallery: builder.mutation({
      query: ({ id, update }) => ({
        url: `/updateGallery/${id}`,
        method: 'PUT',
        body: update,
      }),
    }),
    //Gallery delete api
    deleteGallery: builder.mutation({
      query: (id) => ({
        url: `/deleteGallery/${id}`,
        method: 'DELETE',
      }),
    }),

  })
})

export const {
  useBookingListQuery,
  useAdminLoginMutation,
  useDeleteBookingMutation,
  useCreateBookingMutation,
  useReviewQuery,
  useGetBlogByIdQuery,
  useGetBlogQuery,
  useBlogPostMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useUploadGalleryMutation,
  useGetAllGalleryQuery,
  useUpdateGalleryMutation,
  useGetGalleryByIdQuery,
  useDeleteGalleryMutation,
  useGetBookingByIdQuery,
  useUpdateBookingMutation,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useFindAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useCreatePriceMutation,
  useFindAllPriceQuery,
  useUpdatePricesMutation,
  useGetPriceByIdQuery,
  useDeletePriceMutation,
  useCreateBlogCategoryMutation,
  useDeleteBlogCategoryMutation,
  useFindAllBlogCategoriesQuery,
  useGetBlogCategoryByIdQuery,
  
} = Api



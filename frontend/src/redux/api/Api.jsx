import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/'
    // baseUrl: 'https://blush.glow.api.ara-dreamhome.com/'

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

    //Booking post api
    createBooking: builder.mutation({
      query: (booking) => ({
        url: '/appointment/booking',
        method: 'POST',
        body: booking,
      }),
    }),

    // review get api
    review: builder.query({
      query: () => '/review'
    }),


    //Blog post api
    createPost: builder.mutation({
      query: (postCreate) => ({
        url: '/uploadBlog',
        method: 'POST',
        body: postCreate,
      }),
    }),

    // All Blog
    getBlog: builder.query({
      query: () => "/getBlog",
    }),

    // single blog by id
    getBlogById: builder.query({
      query: (id) => `/getById/${id}`,
    }),

    //Category Update api
    updateBlog: builder.mutation({
      query: ({id, blogUpdate}) => ({
        url: `/updateBlog/${id}`,
        method: 'PUT',
        body: blogUpdate,
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


//category update Update api
updateStatus: builder.mutation({
  query: ({id, statusUpdate}) => ({
    url: `/updateStatus/${id}`,
    method: 'PUT',
    body: statusUpdate,
  }),
}),
//category update Update api
updateCategory: builder.mutation({
  query: ({id, categoryUpdate}) => ({
    url: `/updateCategory/${id}`,
    method: 'PUT',
    body: categoryUpdate,
  }),
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

    //  get price api
    findAllPrice: builder.query({
      query: () => '/findPrices'
    }),

    //price Update api
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

    //create holiday
    createHoliday: builder.mutation({
      query: (holiday) => ({
        url: '/holiday',
        method: 'POST',
        body: holiday,
      }),
    }),

    // holiday get api
    getAllHoliday: builder.query({
      query: () => '/get/holiday'
    }),
    // holiday get By ID api
    getHolidayById: builder.query({
      query: (id) => `/get/holiday/${id}`
    }),
    
    //holiday delete api
    deleteHoliday: builder.mutation({
      query: (id) => ({
        url: `/delete/holiday/${id}`,
        method: 'DELETE',
      }),
    }),

     //certificate post api
     uploadCertificate: builder.mutation({
      query: (certificate) => ({
        url: '/certificateupload',
        method: 'POST',
        body: certificate,
      }),
    }),
    // certificate get api
    getAllCertificate: builder.query({
      query: () => '/getcertificate'
    }),
    // certificate get By ID api
    getCertificateById: builder.query({
      query: (id) => `/getcertificateById/${id}`
    }),
    //certificate Update api
    updateCertificate: builder.mutation({
      query: ({ id, certificateUpdate }) => ({
        url: `/updatecertificate/${id}`,
        method: 'PUT',
        body: certificateUpdate,
      }),
    }),
    //certificate delete api
    deleteCertificate: builder.mutation({
      query: (id) => ({
        url: `/deletecertificate/${id}`,
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
  useDeleteBlogMutation,
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
  useUpdateCategoryMutation,
  useCreatePriceMutation,
  useFindAllPriceQuery,
  useUpdatePricesMutation,
  useGetPriceByIdQuery,
  useDeletePriceMutation,
  useCreateBlogCategoryMutation,
  useDeleteBlogCategoryMutation,
  useFindAllBlogCategoriesQuery,
  useGetBlogCategoryByIdQuery,
  useCreatePostMutation,
  useUpdateBlogMutation,
  useCreateHolidayMutation,
  useDeleteHolidayMutation,
  useGetAllHolidayQuery,
  useGetHolidayByIdQuery,
  useUpdateStatusMutation,
  useUploadCertificateMutation,
  useGetAllCertificateQuery,
  useGetCertificateByIdQuery,
  useUpdateCertificateMutation,
  useDeleteCertificateMutation
} = Api



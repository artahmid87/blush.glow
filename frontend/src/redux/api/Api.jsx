import ApiUrl from '@/components/ui/APIURL'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApiUrl || 'http://localhost:5000',
  }),
  tagTypes: ['Booking', 'Blog', 'BlogCategory', 'ServiceCategory', 'Price', 'Gallery', 'Holiday', 'Certificate', 'Review', "Admin"],
  endpoints: (builder) => ({


    bookingList: builder.query({
      query: () => '/appointment/get/customer',
      providesTags: ['Booking'],
    }),

    getBookingById: builder.query({
      query: (id) => `/appointment/get/${id}`,
      providesTags: ['Booking'],

    }),

    // Update booking with sending a confirmation email
    updateBooking: builder.mutation({
      query: ({ id, booking }) => ({
        url: `/appointment/confirmBooking/${id}`,
        method: 'PUT',
        body: booking,
      }),
      invalidatesTags: ['Booking'],
    }),

    //Booking post api
    createBooking: builder.mutation({
      query: (booking) => ({
        url: '/appointment/booking',
        method: 'POST',
        body: booking,
      }),
      invalidatesTags: ['Booking'],

    }),

    
    //booking delete api
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/appointment/delete/booking/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Booking'],

    }),

    // review get api
    review: builder.query({
      query: () => '/review',
      providesTags: ['Review'],
    }),


    //Blog post api
    createPost: builder.mutation({
      query: (postCreate) => ({
        url: '/uploadBlog',
        method: 'POST',
        body: postCreate,
      }),
      invalidatesTags: ['Blog'],
    }),

    // All Blog
    getBlog: builder.query({
      query: () => "/getBlog",
      providesTags: ['Blog'],
    }),

    // single blog by id
    getBlogById: builder.query({
      query: (id) => `/getById/${id}`,
      providesTags: ['Blog'],
    }),

    //Category Update api
    updateBlog: builder.mutation({
      query: ({ id, blogUpdate }) => ({
        url: `/updateBlog/${id}`,
        method: 'PUT',
        body: blogUpdate,
      }),
      invalidatesTags: ['Blog'],
    }),

    //Blog delete api
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/deleteBlog/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Blog'],
    }),

    //Blog Category post api
    createBlogCategory: builder.mutation({
      query: (category) => ({
        url: '/createBlogCategory',
        method: 'POST',
        body: category,
      }),
      invalidatesTags: ['BlogCategory'],
    }),



    //Blog  get category api
    findAllBlogCategories: builder.query({
      query: () => '/findBlogCategories',
      providesTags: ['BlogCategory'],
    }),
    //Blog category get By ID api
    getBlogCategoryById: builder.query({
      query: (id) => `/findBlogCategory/${id}`,
      providesTags: ['BlogCategory'],
    }),



    //Blog Category delete api
    deleteBlogCategory: builder.mutation({
      query: (id) => ({
        url: `/deleteBlogCategory/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['BlogCategory'],
    }),


    //Category post api
    createCategory: builder.mutation({
      query: (category) => ({
        url: '/createCategory',
        method: 'POST',
        body: category,
      }),
      invalidatesTags: ['ServiceCategory'],
    }),

    //  get category api
    findAllCategories: builder.query({
      query: () => '/findCategories',
      providesTags: ['ServiceCategory'],
    }),
    // category get By ID api
    getCategoryById: builder.query({
      query: (id) => `/findCategory/${id}`,
      providesTags: ['ServiceCategory'],
    }),


    //category update Update api
    updateStatus: builder.mutation({
      query: ({ id, statusUpdate }) => ({
        url: `/updateStatus/${id}`,
        method: 'PUT',
        body: statusUpdate,

      }),
      invalidatesTags: ['ServiceCategory'],
    }),
    //category Update api
    updateCategory: builder.mutation({
      query: ({ id, categoryUpdate }) => ({
        url: `/updateCategory/${id}`,
        method: 'PUT',
        body: categoryUpdate,
      }),
      invalidatesTags: ['ServiceCategory'],
    }),


    //Category delete api
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/deleteCategory/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ServiceCategory'],

    }),



    //Price post api
    createPrice: builder.mutation({
      query: (pricePlan) => ({
        url: '/createPrice',
        method: 'POST',
        body: pricePlan,
      }),
      invalidatesTags: ['Price'],

    }),

    //  get price api
    findAllPrice: builder.query({
      query: () => '/findPrices',
      providesTags: ['Price'],
    }),

    //price Update api
    updatePrices: builder.mutation({
      query: ({ id, pricePut }) => ({
        url: `/updatePrices/${id}`,
        method: 'PUT',
        body: pricePut,
      }),
      invalidatesTags: ['Price'],

    }),


    // gallery get By ID api
    getPriceById: builder.query({
      query: (id) => `/findPrices/${id}`,
      providesTags: ['Price'],
    }),

    //Price delete api
    deletePrice: builder.mutation({
      query: (id) => ({
        url: `/deletePrice/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Price'],
    }),





    //admin login api
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: '/admin/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Admin'],
    }),

    //Gallery post api
    uploadGallery: builder.mutation({
      query: (gallery) => ({
        url: '/galleryUpload',
        method: 'POST',
        body: gallery,
      }),
      invalidatesTags: ['Gallery'],
    }),
    // gallery get api
    getAllGallery: builder.query({
      query: () => '/getGallery',
      providesTags: ['Gallery'],

    }),
    // gallery get By ID api
    getGalleryById: builder.query({
      query: (id) => `/getGelleryById/${id}`,
      providesTags: ['Gallery'],

    }),
    //Gallery Update api
    updateGallery: builder.mutation({
      query: ({ id, update }) => ({
        url: `/updateGallery/${id}`,
        method: 'PUT',
        body: update,
      }),
      invalidatesTags: ['Gallery'],
    }),
    //Gallery delete api
    deleteGallery: builder.mutation({
      query: (id) => ({
        url: `/deleteGallery/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Gallery'],
    }),

    //create holiday
    createHoliday: builder.mutation({
      query: (holiday) => ({
        url: '/holiday',
        method: 'POST',
        body: holiday,
      }),
      invalidatesTags: ['Holiday'],

    }),

    // holiday get api
    getAllHoliday: builder.query({
      query: () => '/get/holiday',
      providesTags: ['Holiday'],

    }),
    // holiday get By ID api
    getHolidayById: builder.query({
      query: (id) => `/get/holiday/${id}`,
      providesTags: ['Holiday'],

    }),

    //holiday delete api
    deleteHoliday: builder.mutation({
      query: (id) => ({
        url: `/delete/holiday/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Holiday'],

    }),

    //certificate post api
    uploadCertificate: builder.mutation({
      query: (certificate) => ({
        url: '/certificateupload',
        method: 'POST',
        body: certificate,
      }),
      invalidatesTags: ['Certificate'],

    }),

    // certificate get api
    getAllCertificate: builder.query({
      query: () => '/getcertificate',
      providesTags: ['Certificate'],

    }),
    // certificate get By ID api
    getCertificateById: builder.query({
      query: (id) => `/getcertificateById/${id}`,
      providesTags: ['Certificate'],

    }),
    //certificate Update api
    updateCertificate: builder.mutation({
      query: ({ id, certificateUpdate }) => ({
        url: `/updatecertificate/${id}`,
        method: 'PUT',
        body: certificateUpdate,
      }),
      invalidatesTags: ['Certificate'],

    }),
    //certificate delete api
    deleteCertificate: builder.mutation({
      query: (id) => ({
        url: `/deletecertificate/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Certificate'],

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



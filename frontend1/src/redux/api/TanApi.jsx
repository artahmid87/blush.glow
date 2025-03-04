import axios from 'axios'

const Api =   axios.create({
    baseURL: "http://localhost:5000",
})

export const GetBlog = async () =>{
    const res = await Api.get('/getBlog')
    return res.status === 200 ? res.data : []; 

}
 
export const BookingList = async () =>{
    const res = await Api.get('/appointment/get/customer')
    return res.status === 200 ? res.data : []; 

}
export const DisplayCategoryQry = async () =>{
    const res = await Api.get('/findCategories')
    return res.status === 200 ? res.data : []; 

}


export const GetBlogCategories = async () =>{
    const res = await Api.get('/findBlogCategories')
    return res.status === 200 ? res.data : []; 

}

export const GetServicePrice = async () =>{
    const res = await Api.get('/findPrices')
    return res.status === 200 ? res.data : []; 

}
 
export const deleteBlogCategory = (id) =>{
    return Api.delete(`/deleteBlogCategory/${id}`)
}

export const deleteServiceCategory = (id) =>{
    return Api.delete(`/deleteCategory/${id}`)
}


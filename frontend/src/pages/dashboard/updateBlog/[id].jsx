import UpdateBlog from '@/components/Dashboard/UpdateBlog'
import { useGetBlogByIdQuery } from '@/redux/api/Api'
import { useRouter } from 'next/router'
import React from 'react'
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"
import { useEffect } from "react"

 const Update = () => {
  const router =  useRouter()
  const id = router.query.id
  const blogData =   useGetBlogByIdQuery(id)

  
  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      router.push('/login');
    } else {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        Cookies.remove('token');
        router.push('/login');
      }
    }
  }, [router]);

  return (
   <section >
    <UpdateBlog blogData ={blogData} />
   </section>
  )
}

export default Update
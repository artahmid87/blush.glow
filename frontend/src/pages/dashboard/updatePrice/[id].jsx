
import { useRouter } from 'next/router'
import React from 'react'
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"
import { useEffect } from "react"
import UpdatePrice from '@/components/Dashboard/ServiceComponent/UpdatePrice'

 const Index = () => {
  const router =  useRouter()

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
    <UpdatePrice/>
   </section>
  )
}

export default Index
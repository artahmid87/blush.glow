import UpdateCategory from '@/components/Dashboard/updateCategory'
import DashboardLayout from '@/layouts/dashboardLayout'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

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

    <DashboardLayout>
 
        <UpdateCategory/>

    </DashboardLayout>
  )
}
export default Index
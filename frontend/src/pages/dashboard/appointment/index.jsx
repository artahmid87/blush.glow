import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';     
import { jwtDecode } from "jwt-decode"
import DashboardLayout from '@/layouts/dashboardLayout';
import AppointmentList from '@/components/Dashboard/AppointmentComponent/AppointmentList';

const Index = () => {
  const router = useRouter();

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
    <AppointmentList/>
    </DashboardLayout>
   
  );
}

export default Index
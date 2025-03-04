
import UpdateCertificate from '@/components/Dashboard/Certificate/UpdateCertificate'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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
       
             <section>
               <UpdateCertificate/>
            </section>
         
           

    )
}

export default Index
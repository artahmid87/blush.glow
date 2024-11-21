import Appointment from '@/components/Home/Appointment/Appointment'
import GoogleReview from '@/components/Home/GoogleReview'
import Review from '@/components/Home/Review'
import Services from '@/components/services/ServicesDetails'
import Header from '@/components/ui/reusableComponent/Header'

 const Index = () => {

  return (
  <section className='bg-white mt-20 '>
    <Header  title ='Services'/>
    <Services/>
    <Appointment/>
    <Review/>
    <GoogleReview/>


  </section>
  )
}
export default Index

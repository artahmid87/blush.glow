import About_us from '@/components/About/About-us'
import Certificate from '@/components/About/Certificate'
import Feature from '@/components/About/Feature'
import Review from '@/components/Home/Review'
import Youtube from '@/components/About/YoutubeVideo'
import Header from '@/components/ui/reusableComponent/Header'
import FacebookPage from '@/components/About/Facebook.Page'
import WhoAmI from '@/components/About/WhoAmI'
import ProfessionalGoal from '@/components/About/ProfessionalGoal'

const about = () => {

  return (
  <section className='mt-20'>
      <Header title = "About us" />
      <About_us/>
      <WhoAmI/>
      <ProfessionalGoal/>
      <Certificate/>
      <Feature/>
      <Youtube/>
      {/* <FacebookPage/> */}

  </section>
  )
}

export  default about

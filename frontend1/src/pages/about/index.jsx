import About_us from '@/components/About/About-us'
import Certificate from '@/components/About/Certificate'
import Header from '@/components/ui/reusableComponent/Header'
import WhoAmI from '@/components/About/WhoAmI'
import ProfessionalGoal from '@/components/About/ProfessionalGoal'
import Youtube from '@/components/About/Feature'

const about = () => {

  return (
  <section className='mt-20'>
      <Header title = "About us" />
      <About_us/>
      <WhoAmI/>
      <ProfessionalGoal/>
      <Certificate/>
      <Youtube/>
    
     

  </section>
  )
}

export  default about

import Container from '@/components/ui/Container'
import React from 'react'
import InformationData from './InformationData'


 const Dashboard = () => {



  return (
  <div className='py-10'>
    <Container>
     <div className="bg-pink-500 py-2 px-3 text-center">
     <h1 className ="text-2xl text-white font-bold">Dashboard</h1>
     </div>
    <InformationData/>
    </Container>
  </div>
  )
}

export default Dashboard
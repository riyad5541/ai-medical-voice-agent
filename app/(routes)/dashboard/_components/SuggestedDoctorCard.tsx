import React from 'react'
import { doctorAgent } from './DoctorsAgentCard'
import Image from 'next/image'

type props = {
    doctorAgent:doctorAgent
    setSelectedDoctor:any
}

function SuggestedDoctorCard({doctorAgent,setSelectedDoctor} : props) {
  return (
    <div className='flex flex-col items-center border rounded-2xl shadow p-5 hover:border-blue-500 cursor-pointer'>
      <Image src={doctorAgent.image}
      alt={doctorAgent.specialist}
      width={70}
      height={70}
      className='w-[50px] h-[50px] rounded-4xl object-cover' onClick={() =>setSelectedDoctor(doctorAgent)}></Image>
      <h2 className='font-bold text-sm text-center'>{doctorAgent.specialist}</h2>
      <p className='test-xs text-center line-clamp-2'>{doctorAgent.description}</p>
    </div>
  )
}

export default SuggestedDoctorCard

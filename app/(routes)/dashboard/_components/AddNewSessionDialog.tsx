"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { IconArrowRight } from '@tabler/icons-react'
import axios from 'axios'
import DoctorsAgentCard, { doctorAgent } from './DoctorsAgentCard'
import { Loader2 } from 'lucide-react'
import SuggestedDoctorCard from './SuggestedDoctorCard'

function AddNewSessionDialog() {
    const [note ,setNote] = useState<string>();
    const [loading, setLoading] = useState(false)
    const [suggestedDoctors, setSuggestedDoctors] = useState<doctorAgent[]>()
    const [selectedDoctor, setSelectedDoctor] = useState<doctorAgent>();
  const OnClickNext = async () =>{
    setLoading(true)
    const result = await axios.post('/api/suggest-doctors',{
      notes:note
    })

    console.log(result.data)
    setSuggestedDoctors(result.data)
    setLoading(false)
  }

  const onStartConsultation = () =>{
    //seve all info to database
  }

  return ( 
    <>
    <Dialog>
  <DialogTrigger> <Button className='mt-3'>+ Start a Consultation</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Basic Details</DialogTitle>
      <DialogDescription asChild>
       {!suggestedDoctors ? <div>
            <h2>
      Add Symptoms or Any Other Details</h2>
      <Textarea 
      placeholder='Add Detail here...'
      className='h-[200px] mt-1'
      onChange={(e) => setNote(e.target.value)}
      ></Textarea>
        </div>
        : <div>
          <h2>Select the Doctor</h2>
          <div className='grid grid-cols-3 gap-5'>
          {/*//suggestedDoctors*/}
          {
            suggestedDoctors.map((doctor,index) =>(<SuggestedDoctorCard doctorAgent={doctor} key={index} setSelectedDoctor={()=>setSelectedDoctor(doctor)}></SuggestedDoctorCard>))
          }
        </div> 
        </div> 
      }
      </DialogDescription>
    </DialogHeader> 
    <DialogFooter>
        <DialogClose>
       <Button variant={'outline'}>cancle</Button></DialogClose>

       {!suggestedDoctors ?  <Button disabled={!note || loading} onClick={() =>OnClickNext()}>
        
          Next {loading ?  <Loader2 className='animate-spin'></Loader2> : <IconArrowRight></IconArrowRight>}</Button> : <Button onClick={() =>onStartConsultation()}>Start Consultation</Button>}
    </DialogFooter>
  </DialogContent>
</Dialog>
    </>
  )
}

export default AddNewSessionDialog

"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../assets/user.png"
import traveimg from "../assets/travel-img.png"
import { SlArrowDown } from "react-icons/sl";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css"
import "../assets/style.css"
export default function Rightpart() {
    const [date,Setdate]=useState(new Date())
    const onchange=(date)=>{
        Setdate(date)
       
    }
  return (
  <>
<div className='flex flex-col '> 
  <div className=' w-60 h-14 border-2 border-dashed  border-primary rounded-xl ml-16'>
    <div className='flex items-center gap-6'>
<Image src={logo} alt='logo' className='size-12 object-cover'/>
<p>Steve Jomes</p>
<SlArrowDown/>
 </div>
    <div className='flex flex-col justify-center mt-14 text-center'>
<Image src={traveimg} alt='travel-image' className='size-60'/>
<h1 className='text-xl font-semibold mt-5 '>Upcomming Holidays</h1>
    </div>
  </div>
<div className='flex items-center mt-[400px]'> 
   <Calendar onChange={()=>{onchange}} value={date}/>
</div>
<div className='mt-5 border-t-2 p-10'>
  <div className='flex flex-col gap-4'>
    <div className='flex items-center gap-3'> 
<span className='w-3 h-3 rounded-full bg-yellow-400'></span><p className='text-xs'>13 March 2024 </p>
    </div>
    <div className='flex items-center gap-3'> 
<span className='w-3 h-3 rounded-full bg-sky-400'></span><p className='text-xs'>13 March 2024 </p>
    </div>
    <div className='flex items-center gap-3'> 
<span className='w-3 h-3 rounded-full bg-violet-400'></span><p className='text-xs'>13 March 2024 </p>
    </div>
  </div>
</div>

</div>
  </>
  )
}

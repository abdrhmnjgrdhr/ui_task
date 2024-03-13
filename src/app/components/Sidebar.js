import React from 'react'
import { MdFlight } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbBrandBooking,TbReportAnalytics  } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { RiLuggageDepositLine } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import Image from 'next/image';
import navimg from "../assets/nav-img.png"

export default function Sidebar() {
  return (
   <>
   <div className='pl-5 h-svhw-[250px] static'>
<Image src={navimg}/>
<div className='mt-8'>
    <ul className='flex flex-col gap-6'>
        <li className='flex gap-5 justify-start items-center'>
        <span className='border  rounded-lg bg-primary size-8 p-2'><MdFlight className='text-white rotate-90'/></span><p className='font-medium'>Search pad</p></li>
        <li  className='flex  gap-5 justify-start  items-center'><span><RxDashboard/></span><p className='font-medium'>Dashboard</p></li>
        <li  className='flex  gap-5 justify-start  items-center'><span><TbBrandBooking/></span><p className='font-medium'>My booking</p></li>
        <li  className='flex  gap-5 justify-start  items-center'><span><GoPerson/></span><p className='font-medium'>Traveller</p></li>
        <li  className='flex  gap-5 justify-start  items-center'><span><RiLuggageDepositLine/></span><p className='font-medium'>Deposit</p></li>
        <li  className='flex gap-5 justify-start  items-center'><span><AiOutlineTransaction/></span><p className='font-medium'>Transaction</p></li>
        <li  className='flex  gap-5 justify-start  items-center'><span><TbReportAnalytics/></span><p className='font-medium'>Ledger Report</p></li>
        <li  className='flex  gap-5 justify-start  items-center'><span><IoPeopleSharp/></span><p className='font-medium'>My staffs</p></li>
    </ul>
</div>
<div className='mt-52'>
    <div className='border-t-2 w-40 inline-block text-start'>
        <p className='flex items-center pl-5 font-medium'><span><HiOutlineLogout/></span>LogOut</p>
    </div>
</div>

   </div>
   </>
  )
}

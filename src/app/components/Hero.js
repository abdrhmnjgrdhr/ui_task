"use client";

import React, { useState } from "react";
import Image from "next/image";
import paperRoc from "../assets/paper_plane.png";
import { IoSearchOutline } from "react-icons/io5";
import { TiDownloadOutline } from "react-icons/ti";
import { MdFlight } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { BsCalendar2Event } from "react-icons/bs";
export default function Hero() {
  const [Isopen, SetIsopen] = useState(false);

  var handleopen = () => {
    SetIsopen(!Isopen);
  };
  return (
    <>
      <div className=" w-4/6 h-full bg-secondary">
        <div className="flex justify-between p-4 items-start ">
          <div>
            <p className="font-thin">
              Welcome Back <span className="font-semibold">Steve!</span>
            </p>
            <h1 className="text-3xl font-extrabold text-primary">
              Book Tickets Now !
            </h1>
          </div>
          <div className="w-[500px] bg-white h-[35px] rounded-xl p-1 flex items-center mt-3">
            <input className="border-none outline-0 bg-none focus:border-none" />
            <div className="ml-60">
              <IoSearchOutline />
            </div>
          </div>
        </div>
        <div className='w-11/12 h-[250px] rounded-3xl bg-primary ml-12 mt-1 relative after:content-[""] after:h-[200px] after:w-[200px] after:bg-white after:absolute after:left-[2%] after:top-[5%]  after:opacity-[0.1] after:rounded-full  before:content-[""] before:h-[100px] before:w-[100px] before:bg-white before:absolute before:left-[50%] before:opacity-[0.1] before:rounded-full before:top-[30%]'>

          <div className="absolute w-[50px] h-[50px] left-[25%] bottom-[10%] bg-white rounded-full opacity-[0.1]"></div>
          <div className="absolute w-[100px] h-[100px] left-[82%] bottom-[35%] bg-white rounded-full opacity-[0.1]"></div>
          <div className="flex justify-between items-center p-5">
            <div>
              <h1 className="text-4xl font-bold text-white">Get 20% OFF</h1>
              <p className="text-xl text-white">On Your First AirTicket</p>
              <button className="rounded-xl py-1 px-4 mt-4 text-white bg-btn">
                Book Ticket Now
              </button>
            </div>
            <div>
              <Image className="size-60" alt="paper-rocket" src={paperRoc} />
            </div>
          </div>
        </div>
        <div className="w-[300px] h-16 bg-white rounded-2xl flex mt-6 ml-16 gap-2 justify-around items-center">
          <div className="flex items-center bg-primary px-4 py-2 rounded-2xl text-white">
            <span className="rotate-90">
              <MdFlight />
            </span>
            <p>Search pad</p>
          </div>
          <div className="flex items-center">
            <span>
              <TiDownloadOutline />
            </span>
            <p>PNR reports</p>
          </div>
        </div>

        <div className="w-11/12 h-[500px] ml-12 mt-10 bg-white rounded-2xl">
          <div className="flex gap-10 pt-5 pl-3">
            <label htmlFor="One way" className="font-semibold ">
              <input className="accent-primary" type="radio" value="oneway" />
              One way
            </label>
            <label htmlFor="Round way" className="font-semibold ">
              <input type="radio" value="Roundway" />
              Round way
            </label>
            <label htmlFor="Multi way" className="font-semibold ">
              <input type="radio" value="Multiway" />
              Multi way
            </label>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 pl-3">
            <div className="w-[400px] h-[100px]  border-2 border-primary border-dashed rounded-xl mt-10 p-4">
              <p>From</p>
              <h1 className="text-xl font-semibold text-primary">Dhaka</h1>
              <p>Hazarat samurahai international Airport</p>
            </div>

            <div className="w-[400px] h-[100px]  border-2 border-primary border-dashed  rounded-xl mt-10 p-4">
              <p>To</p>
              <h1 className="text-xl font-semibold  text-primary">Dubai</h1>
              <p>Dubai International Airport</p>
            </div>

            <div className="w-[400px] h-[100px]  border-2  border-primary border-dashed  rounded-xl mt-10 p-4 flex justify-between items-center">
              <div>
                <p>Journey date</p>
                <h1 className="text-xl font-semibold  text-primary">
                  10 April 2024
                </h1>
                <p>Wednesday</p>
              </div>
              <div>
                <BsCalendar2Event className="size-12  text-primary" />
              </div>
            </div>
            <div className="w-[400px] h-[100px]  border-2  border-primary border-dashed  rounded-xl mt-10 p-4 flex justify-between items-center">
              <div>
                <p>Return date</p>
                <h1 className="text-xl font-semibold  text-primary">
                  15 April 2024
                </h1>
                <p>Monday</p>
              </div>
              <div>
                <BsCalendar2Event className="size-12  text-primary" />
              </div>
            </div>
            <div className="w-[400px] h-[80px] relative border-2 border-primary border-dashed  rounded-xl mt-10 p-2 flex justify-between items-center">
              <div>
                <p>Ticket class</p>
                <h1 className="text-xl font-semibold  text-primary">Economy</h1>
              </div>
              <div>
                <SlArrowDown
                  className="size-5 cursor-pointer"
                  onClick={handleopen}
                />
              </div>
            </div>

            <div className="w-[400px] h-[80px]   border-2  border-primary border-dashed  rounded-xl mt-10 p-2 flex justify-between items-center">
              <div>
                <p>Traveller</p>
                <h1 className="text-xl font-semibold  text-primary">
                  2 Person 1 Baby
                </h1>
              </div>
              <div>
                <SlArrowDown className="size-5" />
              </div>
            </div>
          </div>
          <button className="w-11/12 h-8 rounded-2xl bg-primary text-white font-semibold ml-6">
            Book Now
          </button>
        </div>
        {Isopen && (
          <div className="bg-white w-[300px] h-[100px] absolute top-[920px] left-[250px]">
            <ul className="flex flex-col gap-3">
              <li className="text-xl font-semibold text-primary">Economy</li>
              <li>Executive class</li>
              <li>Buisness class</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

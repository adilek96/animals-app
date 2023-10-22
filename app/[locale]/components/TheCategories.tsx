'use client'
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMotionValue, useVelocity } from "framer-motion"



export  function TheCategories() {
  
  return (
    <div className=' overflow-x-auto w-full h-[105px] rounded-2xl bg-white dark:bg-gray-400   text-black dark:text-white flex justify-around items-center'>

      <Link href="/">
        <div className='flex flex-col justify-center h-[100px] w-[100px]  text-[14px] items-center  '>
          <div className='h-[80px] w-[80px] rounded-full bg-gradient-to-r from-gray-700 to-green-300  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in transition-all duration-200'>
              <Image
                className=""
                src="/categories/all.svg"
                width={70}
                height={70}
                alt="animalsLogo"
                ></Image>
          </div>
          <p className=' text-center hover:text-primary-500'>All</p>
        </div>
      </Link>
     
      <Link href="/">
        <div className='flex flex-col justify-center h-[100px] w-[100px]  text-[14px] items-center  '>
          <div className='h-[80px] w-[80px] rounded-full bg-gradient-to-r from-green-500 to-green-400  shadow-md  shadow-gray-800  flex   justify-center items-center'>
              <Image
                className=""
                src="/categories/cat2.svg"
                width={70}
                height={70}
                alt="animalsLogo"
                ></Image>
          </div>
          <p className=' text-center hover:text-primary-500'>Cats</p>
        </div>
      </Link>
   

      <Link href="/">
        <div className='flex flex-col justify-center h-[100px] w-[100px]  text-[14px] items-center  '>
          <div className='h-[80px] w-[80px] rounded-full bg-gradient-to-r from-green-500 to-green-400  shadow-md  shadow-gray-800  flex   justify-center items-center'>
              <Image
                className=""
                src="/categories/dog2.svg"
                width={70}
                height={70}
                alt="animalsLogo"
                ></Image>
          </div>
          <p className=' text-center hover:text-primary-500'>Dogs</p>
        </div>
      </Link>

      <Link href="/">
        <div className='flex flex-col justify-center h-[100px] w-[100px]   text-[14px] items-center  '>
          <div className='h-[80px] w-[80px] rounded-full bg-gradient-to-r from-green-500 to-green-400  shadow-md  shadow-gray-800  flex   justify-center items-center'>
              <Image
                className=""
                src="/categories/fish2.svg"
                width={65}
                height={65}
                alt="animalsLogo"
                ></Image>
          </div>
          <p className=' text-center hover:text-primary-500'>Fishs</p>
        </div>
      </Link>

      <Link href="/">
        <div className='flex flex-col justify-center h-[100px] w-[100px]   text-[14px] items-center  '>
          <div className='h-[80px] w-[80px] rounded-full bg-gradient-to-r from-green-500 to-green-400  shadow-md  shadow-gray-800  flex   justify-center items-center'>
              <Image
                className=""
                src="/categories/bird2.svg"
                width={70}
                height={70}
                alt="animalsLogo"
                ></Image>
          </div>
          <p className=' text-center hover:text-primary-500'>Birds</p>
        </div>
      </Link>

      <Link href="/">
        <div className='flex flex-col justify-center h-[100px] w-[100px]  text-[14px] items-center  '>
          <div className='h-[80px] w-[80px] rounded-full bg-gradient-to-r from-green-500 to-green-400  shadow-md  shadow-gray-800  flex   justify-center items-center'>
              <Image
                className=""
                src="/categories/rat2.svg"
                width={70}
                height={70}
                alt="animalsLogo"
                ></Image>
          </div>
          <p className=' text-center hover:text-primary-500'>Rats</p>
        </div>
      </Link>

      <Link href="/">
        <div className='flex flex-col justify-center h-[100px] w-[100px]  text-[14px] items-center  '>
          <div className='h-[80px] w-[80px] rounded-full bg-gradient-to-r from-green-500 to-green-400  shadow-md  shadow-gray-800  flex   justify-center items-center'>
              <Image
                className=""
                src="/categories/goodHands2.svg"
                width={60}
                height={60}
                alt="animalsLogo"
                ></Image>
          </div>
          <p className=' text-center  hover:text-primary-500'> Good Hands</p>
        </div>
      </Link>

      <Link href="/">
        <div className='flex flex-col justify-center h-[100px] w-[100px]  text-[14px] items-center  '>
          <div className='h-[80px] w-[80px] rounded-full bg-gradient-to-r from-green-500 to-green-400  shadow-md  shadow-gray-800  flex   justify-center items-center'>
              <Image
                className=""
                src="/categories/acsesories2.svg"
                width={70}
                height={70}
                alt="animalsLogo"
                ></Image>
          </div>
          <p className=' text-center hover:text-primary-500'>Acsesories</p>
        </div>
      </Link>

      <Link href="/">
        <div className='flex flex-col justify-center h-[100px] w-[100px]  text-[14px] items-center  '>
          <div className='h-[80px] w-[80px] rounded-full bg-gradient-to-r from-green-500 to-green-400  shadow-md  shadow-gray-800  flex   justify-center items-center'>
              <Image
                className=""
                src="/categories/food2.svg"
                width={65}
                height={65}
                alt="animalsLogo"
                ></Image>
          </div>
          <p className=' text-center hover:text-primary-500'>Foods</p>
        </div>
      </Link>

      <Link href="/">
        <div className='flex flex-col justify-center h-[100px] w-[100px] text-[14px] items-center  '>
          <div className='h-[80px] w-[80px] rounded-full bg-gradient-to-r from-green-500 to-green-400  shadow-md  shadow-gray-800  flex   justify-center items-center'>
              <Image
                className=""
                src="/categories/farm2.svg"
                width={65}
                height={65}
                alt="animalsLogo"
                ></Image>
          </div>
          <p className=' text-center hover:text-primary-500'>Farm Animals</p>
        </div>
      </Link>

    </div>

  )
}

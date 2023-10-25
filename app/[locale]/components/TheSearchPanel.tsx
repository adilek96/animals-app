'use client'
import React,{ useEffect, useState} from 'react';
import { SearchButton } from './buttons/SearchButton';
import { FaCat, FaDog, FaFish, FaCow, FaKiwiBird } from "react-icons/fa6";
import { motion } from "framer-motion";


export  function TheSearchPanel() {

    const icons = [
        <FaCat key={1} size={20} />,
        <FaDog key={2} size={20} />,
        <FaFish key={3} size={20} />,
        <FaCow key={4} size={20} />,
        <FaKiwiBird key={5} size={20} />
      ];

   
        const [currentIcon, setCurrentIcon] = useState(0);
      
        const nextIcon = () => {
          setCurrentIcon((prev) => (prev + 1) % icons.length);
        };
      
        useEffect(() => {
          const interval = setInterval(nextIcon, 4000);
          return () => clearInterval(interval);
        }, []);
    
   
  return (
    <div className=' flex flex-col justify-center h-[50px] w-full rounded-lg items-center bg-white dark:bg-gray-400 shadow-md '>
        <form className='w-full '>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           {icons[currentIcon]}
        </motion.div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500 rounded-lg" placeholder="Search ..." required />
        {/* <button  type="submit" className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none  font-medium  text-sm px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700 ">Search</button> */}
        <SearchButton />
    </div>
        </form>
    </div>
  )
}

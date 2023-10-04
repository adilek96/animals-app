'use client'
import React from 'react';
import {  FaWindowClose } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {logInModalActive} from "../../store/logInModalActive"
import { motion } from "framer-motion";

export  function LogInWindow() {
  const loginModal = logInModalActive(state => state.loginModal);
  const setLoginModalActive = logInModalActive(state => state.setLoginModalActive);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -1000 }} 
      animate={{
      opacity: loginModal ? 1 : 0,
      y: loginModal ? 0 : -1000
      }}
      transition={{ duration: 0.5 }}
      className=' fixed w-screen backdrop-blur-lg inset-0'>
      
      <div className=' fixed md:w-[50vw] h-[80vh]  md:left-[25%] top-[5%] sm:w-[90vw] sm:left-[5%] bg-white z-50 shadow-2xl  shadow-gray-800 rounded-md border-t-[5px] border-primary-500 flex flex-col gap-3 justify-center items-center'>
      <button onClick={() =>  setLoginModalActive(!loginModal)} className="focus:outline-none active:outline-none shadow-xl shadow-primary-800 absolute right-1 top-0 w-[30px] h-[30px]"><FaWindowClose className="absolute right-0 top-1  text-primary-300 w-[30px] h-[30px]"/></button>
     
      <button  className="focus:outline-none active:outline-none  bg-gradient-to-r from-primary-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[200px] "><FcGoogle className="text-[80px]"/>oogle вход</button>
      <p>Или</p>
     <form className="space-y-6 w-[300px] " action="#" >
       <div>
         <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700">
           Электронная почта
         </label>
         <div className="mt-2">
           <input
             id="email"
             name="email"
             type="email"
             autoComplete="email"
             required
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
           />
         </div>
       </div>

       <div>
         <div className="flex items-center justify-between ">
           <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-700 ">
             Пароль
           </label>
           <div className="text-sm">
             <a href="#" className="font-semibold text-green-500 hover:text-green-700">
               Забыли пароль?
             </a>
           </div>
         </div>
         <div className="mt-2">
           <input
             id="password"
             name="password"
             type="password"
             autoComplete="current-password"
             required
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
           />
         </div>
       </div>
       <div className='flex  justify-center'>
         <button
           type="submit"
           className="focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[200px] "
         >
           Войти
         </button>
       </div>
     </form>
</div>
</motion.div>
      

  
  )
}

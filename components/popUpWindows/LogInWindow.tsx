'use client'
import React,{useState} from 'react';
import {  FaWindowClose } from "react-icons/fa";
import {logInModalActive} from "../../store/logInModalActive"
import { motion } from "framer-motion";
import { LogIn } from './LogIn';
import { SignIn } from './SignIn';

export  function LogInWindow() {
  const loginModal = logInModalActive(state => state.loginModal);
  const setLoginModalActive = logInModalActive(state => state.setLoginModalActive);

  const [toggle, setToggle] = useState("login");

  return (
    <motion.div 
      initial={{ opacity: 0, y: -1000 }} 
      animate={{
      opacity: loginModal ? 1 : 0,
      y: loginModal ? 0 : -1000
      }}
      transition={{ duration: 0.5 }}
      className=' fixed w-screen backdrop-blur-lg inset-0'>
      
      <div className=' fixed md:w-[50vw] h-[90vh]  md:left-[25%] top-[5%] sm:w-[90vw] sm:left-[5%] bg-white z-50 shadow-2xl  shadow-gray-800 rounded-md border-t-[5px] border-primary-500 flex flex-col gap-3 justify-center items-center'>
      <button onClick={() =>  setLoginModalActive(!loginModal)} className="focus:outline-none active:outline-none shadow-xl shadow-primary-800 absolute right-1 top-0 w-[30px] h-[30px]"><FaWindowClose className="absolute right-0 top-1  text-primary-300 w-[30px] h-[30px]"/></button>
      <nav className="inline-block">
            <ul className=" w-[300px] box-content text-[16px] font-bold antialiased flex flex-none h-[80px] items-center ">
              <li><button onClick={() => setToggle("login")}    className={`w-[150px] box-content h-[80px]  flex items-center  hover:text-primary-500 duration-300 ${toggle === 'login' ? ' text-primary-500 border-t-[5px] border-t-primary-500 border-solid' : ''}`} >Вход</button></li>
              <li><button onClick={() => setToggle("signin")}   className={`w-[150px] box-content h-[80px]  flex items-center  hover:text-primary-500 duration-300 ${toggle === 'signin' ? ' text-primary-500 border-t-[5px] border-t-primary-500 border-solid' : ''}`} >Регистрация</button></li>
            </ul>
      </nav>
      {toggle === "signin" ? <SignIn /> : <LogIn />  }
      
      
</div>
</motion.div>
      

  
  )
}

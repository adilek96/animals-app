'use client'
import React,{useState} from 'react';
import { IoSettings } from "react-icons/io5";
import { ThemeSwitch } from './ThemeSwitch';
import  {LangSwitcher}  from "./LangSwitcher";
import { motion } from "framer-motion";

export function Settings() {
    // стэйт вызова анимации шестеренки
  const [settings, setSettings] = useState(false)
  return (
          <div onMouseEnter={() => setSettings(true)} onMouseLeave={() => setSettings(false)} className="  absolute top-[105px] right-[10px] w-[35px] hover:w-[230px] h-[35px] flex justify-start items-center bg-white dark:bg-transparent  dark:backdrop-blur-lg  dark:text-white    dark:border-[2px] dark:border-green-500  rounded-full shadow-md shadow-green-800 duration-700">
               
              <LangSwitcher settings={settings}/>
              <ThemeSwitch settings={settings} />
              <motion.div 
                  initial={{
                    rotate: 0,
                  }}
                  animate={{
                    rotate: settings ? 180: 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute   right-[-2px] w-[37px] h-[37px] bg-gradient-to-r from-green-500 to-green-400  rounded-full flex justify-center items-center hover:contrast-125 duration-700 ">
                <IoSettings className="text-[22px] text-white" />
              </motion.div> 
     </div>
  )
}

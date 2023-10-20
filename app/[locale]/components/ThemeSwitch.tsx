'use client'
import { useState , useEffect} from 'react'
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react'
import { motion } from "framer-motion";
import { RxMoon, RxSun } from "react-icons/rx";


export  function ThemeSwitch({settings}:{settings:boolean}) {
  const [enabled, setEnabled] = useState(true)
  const {theme, setTheme,  systemTheme} = useTheme()
  const [mounted , setMounted] = useState("false")
  useEffect(() => {
      setMounted("true");
  }, []);
 

  useEffect(() => {
    if(systemTheme === "light" ){
      setEnabled(true)
    } else if ( systemTheme === "dark") {
      setEnabled(false)
    } 
  },[mounted])

  if(enabled){
    setTheme("ligt")
  } else {
    setTheme("dark")
  } 

  
//   if(!mounted){
//     return null
// } 
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: settings ? 1: 0,
    }}
    transition={{ duration: 0.9, delay: 0.3}}
    
    className={`${!settings ? "hidden" : "flex"} duration-300 justify-start items-center ml-3 `}>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex items-center  h-[25px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        
        <span className="sr-only">Use setting</span>
       
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-6' : 'translate-x-[-2px]'}
            pointer-events-none border-primary-500 border-[2px]  h-[29px] w-[29px] transform rounded-full ${enabled ? "bg-white" : "bg-black" } shadow-lg ring-0 transition duration-200 ease-in-out flex items-center justify-center` }
        >
          {enabled ? <RxSun className={`text-yellow-400`}/> : <RxMoon  className={`text-yellow-400`}/>}
      </span>
        
      </Switch>
     

    </motion.div>
  )
}
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { motion } from "framer-motion";
import { RxMoon, RxSun } from "react-icons/rx";

export  function ThemeSwitch({settings}:{settings:boolean}) {
  const [enabled, setEnabled] = useState(false)

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
          relative inline-flex h-[25px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        
        <span className="sr-only">Use setting</span>
       
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
     

    </motion.div>
  )
}
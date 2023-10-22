'use client'
import React from 'react'
import { TheCategories } from '../../TheCategories'
import { motion } from "framer-motion";
import { mobileFooterState } from "../../../../../store/mobileFooterState";

export function CategoryWindow() {
    const setCallCategory  = mobileFooterState(state => state.setCallCategory);
    const callCategory = mobileFooterState(state => state.callCategory);


  return (
     <motion.div 
    initial={{ opacity: 0, y: -1000 }} 
    animate={{
    opacity: callCategory ? 1 : 0,
    y: callCategory ? 0 : -1000
    }}
    transition={{ duration: 0.5 }}
    onClick={() => setCallCategory(!callCategory)}
    className=' fixed w-screen backdrop-blur-sm inset-0 z-20 pt-20'>
         
          <TheCategories />
     
       
    </motion.div>
        
   
  )
}

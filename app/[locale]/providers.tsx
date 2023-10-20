'use client'
import React,{useEffect, useState} from "react"
import { ThemeProvider } from "next-themes"
// import { TheHeader } from "@/app/[locale]/components/TheHeader";
// import { TheFooter } from "@/app/[locale]/components/TheFooter";
// import { BurgerMenu } from "@/app/[locale]/components/BurgerMenu";
// import { LogInWindow } from "@/app/[locale]/components/popUpWindows/LogInWindow";

export default function Providers({children} : {children: React.ReactNode}){
    const [mounted , setMounted] = useState("false")
    useEffect(() => {
        setMounted("true");
    }, []);
    if(!mounted){
        return <>{children}</>
    } 
    

    return (
    < ThemeProvider defaultTheme="system" attribute="class">
       {children}
    </ ThemeProvider>
)
}

// "next-intl": "^3.0.0-beta.19",
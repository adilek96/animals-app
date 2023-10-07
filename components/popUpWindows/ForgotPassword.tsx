import React, {useState} from 'react';
import {logInModalActive} from "../../store/logInModalActive";

export  function ForgotPassword() {
    const [check ,setCheck] = useState("email");
    const setToggle = logInModalActive(state => state.setToggle);

    const codeCheck = () => {
        return (
            <>
                <form className="mt-10 space-y-12 w-[300px] " action="#" >
                    <p className="block text-sm font-bold  text-primary-800">На ваш электронный адресс был выслан проверочный код</p>
                <div>
                 <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-700">
                   Введите проверочный код
                 </label>
                 <div className="mt-2">
                   <input
                     id="code"
                     name="code"
                     type="number"
                     autoComplete="number"
                     required
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                   />
                 </div>
               </div>
               <div className='flex flex-row-reverse justify-between'>
                <button
                   type="button"
                   onClick={() => setCheck("password")}
                   className="focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[150px] "
                 >
                   Потвердить код
                 </button>
        
                 <button
                   type="button"
                   onClick={() => setCheck("email")}
                   className="focus:outline-none active:outline-none  bg-gradient-to-r from-primary-500 to-primary-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-primary-800    flex items-center justify-center text-center text-white  h-[40px] w-[100px] "
                 >
                   Назад
                 </button>
               </div>
                </form>
            </>
        )
    };

    const emailCheck = () => {
        return(
            <>
                <form className="mt-10 space-y-12 w-[300px] " action="#" >
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
               <div className='flex flex-row-reverse justify-between'>
                <button
                   type="button"
                   onClick={() => setCheck("code")}
                   className="focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[150px] "
                 >
                   Отправить код
                 </button>
        
                 <button
                   type="button"
                   onClick={() => setToggle("login")}
                   className="focus:outline-none active:outline-none  bg-gradient-to-r from-primary-500 to-primary-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-primary-800    flex items-center justify-center text-center text-white  h-[40px] w-[100px] "
                 >
                   Назад
                 </button>
               </div>
                </form>
            </>
          )
    };

    const changeNewPassword = () => {
        return (
            <>
                <form className="mt-10 space-y-12 w-[300px] " action="#" >
                    <p className="block text-sm font-bold  text-primary-800">Придумайте новый пароль</p>
                <div>
                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-700">
                   Введите пароль
                 </label>
                 <div className="mt-2">
                   <input
                     id="password"
                     name="password"
                     type="password"
                     autoComplete="password"
                     required
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                   />
                 </div>

                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-700">
                   Повторите пароль
                 </label>
                 <div className="mt-2">
                   <input
                     id="password"
                     name="password"
                     type="password"
                     autoComplete="password"
                     required
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                   />
                 </div>
               </div>

               

               <div className='flex flex-row-reverse justify-between'>
                <button
                   type="button"
                   className="focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[150px] "
                 >
                   Сменить пароль
                 </button>
        
                 <button
                   type="button"
                   onClick={() => { setCheck("email")}}
                   className="focus:outline-none active:outline-none  bg-gradient-to-r from-primary-500 to-primary-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-primary-800    flex items-center justify-center text-center text-white  h-[40px] w-[100px] "
                 >
                   Назад
                 </button>
               </div>
                </form>
            </>
        )
    }

    if(check === "email"){
        return emailCheck()
    }
    if(check === "code"){
        return codeCheck()
    }
    if(check === "password"){
        return changeNewPassword();
    }
 
}

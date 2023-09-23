import Link from "next/link";
import Image from "next/image";


export  function TheHeader() {
  return (
    <header className=" w-screen h-[150px]  items-center flex justify-between  bg-green-500 px-12">
      <div className="w-[100px] h-[100px]">
        <Image src="/logo/logo.png" 
          width={100}
          height={100} 
          alt="logo" 
        />
      </div>
       
      <div className=" bg-yellow-400 2xl:w-9/12   2xl:flex  xl:w-[500px]">
        <nav className="xl:hidden md:hidden sm:hidden 2xl:flex h-[150px] w-9/12  items-center  bg-orange-400    gap-[100px]">
            <Link href="/">Главная</Link>
            <Link href="/posts">Обьявления</Link>
            <Link href="/articles">Статьи</Link>
            <Link href="/clinic">Ветклиники</Link>
        </nav>
        <div className="2xl:w-[500px] h-[150px]   bg-gray-500">

        </div>

      </div>
     
    </header>
  )
}

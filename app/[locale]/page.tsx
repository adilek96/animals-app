
import {useTranslations} from 'next-intl';
import { TheCategories } from './components/TheCategories';
import { TheSearchPanel } from './components/TheSearchPanel';



export default function Home() {
  return (
    <>
      <section className='mt-9 mx-auto w-[98%]'>
        <TheCategories/>
      </section>

      {/* <section className=' mt-9 mx-auto w-[95%] '>
        <TheSearchPanel/>
      </section> */}

      <section className=" bg-white dark:bg-gray-700 dark:shadow-gray-800 w-[95%] h-[300px] mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl">
      
  
      </section>
    </>

  )
}

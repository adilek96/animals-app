
import {useTranslations} from 'next-intl';
import { TheCategories } from './components/TheCategories';



export default function Home() {
  return (
    <section className=" bg-white dark:bg-gray-700 dark:shadow-gray-800 w-[95%] h-[300px] mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-md">
      <TheCategories/>
  
    </section>
  )
}

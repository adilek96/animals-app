import { create } from 'zustand'

interface NewPostState {
  category: {name:string, type:string | undefined, saveType: string},
  vaccinations: boolean,
  passport: boolean,
  pedigree: boolean,
  title: string,
  description: string,
  city: string,
  isGoodHands: boolean,
  price: number,
  isFinish: boolean,
  isError: boolean,
  setCategory: (selectCategory: { name: string; type: string | undefined, saveType: string }) => void,
  setVaccinations: (isTrue: boolean) => void,
  setPassport: (isTrue: boolean) => void,
  setPedigree: (isTrue: boolean) => void,
  setTitle: (adsTitle: string) => void,
  setDescription: (adsDesc: string) => void,
  setCity: (adsCity: string) => void,
  setGoodHands: (isTrue: boolean) => void,
  setPrice: (adsPrice: number) => void,
  setIsFinish: (isFinished: boolean) => void,
  setIsError: (error: boolean) => void
  
  
}

export const newPostState = create<NewPostState>()((set) => ({
    category: {name:"",type:"", saveType:""},
    setCategory: (selectCategory) => set({ category: selectCategory }),
    vaccinations: false,
    setVaccinations: (isTrue) => set({ vaccinations: isTrue}),
    passport: false,
    setPassport: (isTrue) => set({ vaccinations: isTrue}),
    pedigree: false,
    setPedigree: (isTrue) => set({ vaccinations: isTrue}),
    title: "",
    setTitle: (adsTitle) => set({title: adsTitle}),
    description: "",
    setDescription: (adsDesc) => set({description: adsDesc}),
    city: "",
    setCity: (adsCity) => set({city: adsCity}),
    isGoodHands: false,
    setGoodHands: (isTrue) => set({ isGoodHands: isTrue}),
    price: 0,
    setPrice: (adsPrice) => set({price: adsPrice}),
    isFinish: false,
    setIsFinish: (isFinished) => set({isFinish: isFinished}),
    isError: false,
    setIsError: (error) => set({isError: error})
}))
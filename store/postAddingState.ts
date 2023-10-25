import { create } from 'zustand'

interface PostAddingState {
  isOpen: boolean,
  check: string,
  setCheck: (isToggle: string) => void,
  setIsOpen: (isActive: boolean) => void
  
}

export const postAddingState = create<PostAddingState>()((set) => ({
  check: "stepOne",
  isOpen: false,
  setIsOpen: (isActive) => set({ isOpen: isActive }),
  setCheck: (isCheck) => set({check: isCheck})
}))
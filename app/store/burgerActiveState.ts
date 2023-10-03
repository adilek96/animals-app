import { create } from 'zustand'

interface BurgerActiveState {
  burger: boolean,
  setBurgerActive: (isActive: boolean) => void
  
}

export const burgerActiveState = create<BurgerActiveState>()((set) => ({
  burger: false,
  setBurgerActive: (isActive) => set({ burger: isActive }),
}))
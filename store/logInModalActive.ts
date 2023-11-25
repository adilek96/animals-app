import { create } from 'zustand'

interface LogInModalState {
  loginModal: boolean,
  toggle: string,
  setToggle: (isToggle: string) => void,
  setLoginModalActive: (isActive: boolean) => void
  
}

export const logInModalActive = create<LogInModalState>()((set) => ({
  toggle: "login",
  loginModal: false,
  setLoginModalActive: (isActive) => set({ loginModal: isActive }),
  setToggle: (isToggle) => set({toggle: isToggle})
}))
import { create } from 'zustand'

interface LogInModalState {
  loginModal: boolean,
  setLoginModalActive: (isActive: boolean) => void
  
}

export const logInModalActive = create<LogInModalState>()((set) => ({
    loginModal: false,
  setLoginModalActive: (isActive) => set({ loginModal: isActive }),
}))
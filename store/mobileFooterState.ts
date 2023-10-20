import { create } from 'zustand'

interface MobileFooterState {
  footerHide: boolean,
  setFooterHide: (isActive: boolean) => void
  
}

export const mobileFooterState = create<MobileFooterState>()((set) => ({
    footerHide: false,
    setFooterHide: (isActive) => set({ footerHide: isActive }),
}))
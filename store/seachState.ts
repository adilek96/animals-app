import { create } from 'zustand'

interface SearchState {
  search: string,
  setSearch: (isActive: string) => void,
  isSearch: boolean,
  setIsSearch: (isSearch: boolean) => void
  
}

export const searchState = create<SearchState>()((set) => ({
 search: "",
setSearch: (isActive) => set({ search: isActive }),
isSearch: false,
setIsSearch: (isActive) => set({ isSearch: isActive }),
}))
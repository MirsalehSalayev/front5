import React, { createContext, useState } from 'react'
export const SearchContext = createContext()
function SearchProvider({children}) {
    const [search, setSearch] = useState("")
    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }
    const data={
        handleSearch,search
    }
  return (
  <SearchContext.Provider value={data}>
    {children}
  </SearchContext.Provider>
  )
}

export default SearchProvider
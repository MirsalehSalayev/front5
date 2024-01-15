import React, { useContext, useEffect } from 'react'
import useLocal from '../../Hooks/useLocal'
import { SearchContext } from '../../Context/search'
import { NavLink } from 'react-router-dom'
function Work() {
    const  {search,handleSearch}=useContext(SearchContext)
    const [data, setData] = useLocal("work",[])
    useEffect(()=>{
        const FetchData = async()=>{
            const response = await fetch("http://localhost:3100/services")
            const api= await response.json()
            setData(api)
        }
        FetchData()
    })
    
  return (
      <div>
        <input  type="text" onChange={(e)=>handleSearch(e)} value={search} />
        
        {data
        .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
        .map((item)=>{
        return(
            <div>

            <div key={item._id}>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div>
                    <h3>{item.name}</h3>
                </div>
                <div>
                    <p>{item.title}</p>
                </div>
                <NavLink to={/detail/+item._id}>

                <button >detailpage</button>
                </NavLink>
            </div>
            </div>
        )
    })}</div>
  )
}

export default Work
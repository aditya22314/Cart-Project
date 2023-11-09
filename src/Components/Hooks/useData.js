import React, { useEffect, useState } from 'react'
import apiClient from '../Products/utils/api-client'


const useData = (endPoint,customConfig,deps) => { 
    
    const [data, setData] = useState([])
    const [err, seterr] = useState("") 
    const [loading, setloading] = useState(false)
    useEffect(()=>{ 
        setloading(true)
    apiClient.get(endPoint,customConfig).then(res => {
        if (endPoint === "/products" &&  data && data.products){
            setData(prev => ({
                ...prev,products:[...prev.products,...res.data.products]
            }))
        } else{
        setData(res.data),setloading(false) } } ).catch(err=>{seterr(err.message)
     setloading(false)   
    })
      
    }, deps ? deps :[]);  

    return {data,err,loading}
    
}

export default useData

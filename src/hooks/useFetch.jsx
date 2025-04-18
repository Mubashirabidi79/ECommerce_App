import React, { useEffect, useState } from 'react'

function useFetch(url) {
  
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)


    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setData(res)
            console.log(res);
            
            return res
        })
        .catch((err)=>{
            setError(true)
            return err
        })
        .finally(()=>{
            setLoading(false);
        })
    },
    
    [])

    return [loading,error,data];
}

export default useFetch


import React, { useEffect, useState } from 'react'

function useGetUser() {

    const [data, setData] = useState({});
    useEffect(()=>{
        fetch('https://api.github.com/users/anil-joshi-98').then(res=>res.json()).then(d=>setData(d));
    },[]);

  return data;
}

export default useGetUser
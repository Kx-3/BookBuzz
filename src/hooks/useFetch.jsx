import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
    }
    
    useEffect(() =>{
        fetchData()
    }, [url])
    return data
}

export default useFetch
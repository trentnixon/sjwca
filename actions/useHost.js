import { useEffect, useState } from "react"

export const useHost=()=>{
        const [host, setHost] = useState(null)

        const findHost = ()=>{
            setHost(window.location.hostname)
        }

        useEffect(()=>{},[host])
        return[host,findHost]
}
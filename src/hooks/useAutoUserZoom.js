import { useEffect, useState } from "react"

const useAutoUserZoom = (window) => {
    const [userZoom, setUserZoom] = useState('normal')
    useEffect(() => {
        if (typeof window !== 'undefined' && window.devicePixelRatio > 1)
            setUserZoom(`${100 / (window.devicePixelRatio * 0.9)}%`)
    }, [window])

    return userZoom
}

export default useAutoUserZoom
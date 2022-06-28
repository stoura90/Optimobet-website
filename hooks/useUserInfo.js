import React, { useEffect, useState } from 'react'

export default function useUserInfo() {
    const [info, setInfo] = useState()

    useEffect(() => {
        const userData = localStorage.getItem('user')
        if (userData) {
            setInfo(JSON.parse(userData))
        }
    }, [])

    return info
}

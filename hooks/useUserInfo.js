import React, { useEffect, useState } from 'react'

export default function useUserInfo() {
    const [info, setInfo] = useState()

    useEffect(() => {
        const onStorage = () => {
            console.log('storage')
            const userData = localStorage.getItem('user')
            if (userData) {
                setInfo(JSON.parse(userData))
            }
        };

        window.addEventListener('storage', onStorage);

        const userData = localStorage.getItem('user')
        if (userData) {
            setInfo(JSON.parse(userData))
        }

        return () => {
            window.removeEventListener('storage', onStorage);
        };
    }, []);

    return info
}

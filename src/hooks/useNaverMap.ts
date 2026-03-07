'use client'

import { useEffect, useState } from 'react'

export function useNaverMap() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 이미 로드된 경우
    if (window.naver?.maps) {
      setIsLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`
    script.async = true
    script.onload = () => setIsLoaded(true)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return { isLoaded }
}

import React, { useState, useEffect } from 'react'

const Shutter = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 700) 

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex justify-center items-center transition-opacity duration-1000 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <div className="text-white m-auto text-center p-8">
        <div className="flex flex-wrap pl-12 gap-4">
          <div className="animate-pulse bg-gray-600 rounded-full h-24 w-24"></div>
          <div className="animate-pulse bg-gray-600 rounded-full h-16 w-16"></div>
          <div className="animate-pulse bg-gray-600 rounded-full h-32 w-32"></div>
          <div className="animate-pulse bg-gray-600 rounded-full h-20 w-20"></div>
          <div className="animate-pulse bg-gray-600 rounded-full h-28 w-28"></div>
        </div>

        <h1 className="text-4xl font-bold pt-5 mb-4">Welcome to Brewers</h1>
        <p className="text-lg">Discover a wide selection of amazing beers!</p>
      </div>
    </div>
  )
}

export default Shutter

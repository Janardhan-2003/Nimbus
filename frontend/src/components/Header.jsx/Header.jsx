import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-transparent h-16 shadow-md px-8 top-0 sticky w-full'>
      <h1 className='text-slate-200 text-2xl font-serif font-bold'>NimbuS</h1>
      <div className="flex items-center justify-center gap-3 ">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-400 tracking-wide uppercase">Live Weather</span>
          </div>
    </div>
  )
}

export default Header
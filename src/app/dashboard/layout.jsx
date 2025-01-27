import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div>
        <div className='grid grid-cols-12'>
            {/* sidebar */}
            <div className='col-span-3'>

            </div>
            {/* dashboard */}
            <div className='col-span-9'></div>
        </div>
      {children}
    </div>
  )
}

import React from 'react'

const Navbar = () => {
    const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Store', href: '#', current: false },
  { name: 'Cart', href: '#', current: false },
  { name: 'Login', href: '#', current: false },
]
  return (
   <div className="flex flex-1 items-center justify-items-stretch sm:items-stretch sm:justify-start bg-gray-200 py-4">
                <div className="flex flex-shrink-0 items-center">
                 <h5>STOKCOMMERCE</h5>
                </div>

<div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white
                          rounded-md px-3 py-2 text-sm font-medium'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
    </div>
  )
}

export default Navbar
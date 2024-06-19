import React from 'react'

const Navbar = () => {
    const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
  return (
   <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start bg-gray-800 py-4">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
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
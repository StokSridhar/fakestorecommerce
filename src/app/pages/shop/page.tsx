import Sidebar from "@/app/components/Sidebar";
import ProductList from "../ProductList";

import React from 'react'

const page = () => {
  return (
    <div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              Sort Menu

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
              Grid Icon
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
               
              >
                <span className="sr-only">Filters</span>
               
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6"> 

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <Sidebar/>

              {/* Product grid */}
              <div className="lg:col-span-3">
                 <ProductList/>
              </div>
            </div>
          </section>
        </main>
       
    </div>
  )
}

export default page
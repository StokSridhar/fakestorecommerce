import Link from "next/link"
import { ProductList } from "../services/services"
import Catagory from "./Catagory" 

 
export default async function Page() {
  const data = await ProductList() 
  return <main> 
    
     <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8">  
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {data.map((product:any) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-fit object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href="/pages/products">{product.title}</Link> 
                    
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">&#8377;{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  </main>
}
 
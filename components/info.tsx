"use client";
import { ShoppingCart } from "lucide-react"


import { Product } from "@/types"
import CurrencyComponent from "./ui/currency-component"
import Button from "./ui/button"

interface InfoProps {
    data: Product
}
const Info: React.FC<InfoProps> = ({
    data
}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-gray-700">{data.name}</h1>
        <div className="mt-3 flex text-gray-500 items-end justify-between">
         <CurrencyComponent value={data?.price}/>
        </div>
        <hr className="my-4"/>
           <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                  <h3 className="font-semibold text-black">
                     Size:
                  </h3>
                  <div className="text-gray-900">
                      {data?.size?.name}
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <h3 className="font-semibold text-black">
                     Color:
                  </h3>
                  <div className="h-6 w-6 rounded-full border border-gray-600" style={{background: data?.color?.value}}/>
                </div>
          </div>  
          <div className="mt-10 flex items-center gap-x-3">
             <Button className="flex items-center gap-x-2">
                Add To Cart
                <ShoppingCart/>
             </Button>
          </div>      
    </div>
  )
}

export default Info
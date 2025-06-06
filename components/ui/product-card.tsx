"use client";
import Image from "next/image";



import { Product } from "@/types";
import IconButton from "./icon-button";
import { Expand, ShoppingCartIcon } from "lucide-react";
import CurrencyComponent from "./currency-component";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
    data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();
  const  handleClick = () => {
     router.push(`/product/${data.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();

      previewModal.onOpen(data);
  }


  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
}

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl shadow-md shadow-gray-300 p-3 space-y-4">
       <div className="aspect-square rounded-xl bg-gray-50 relative">
          <Image alt="Image" src={data?.images?.[0]?.url} fill className="aspect-square object-cover rounded-md"/>
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
                <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600"/>}/>
                <IconButton onClick={onAddToCart} icon={<ShoppingCartIcon size={20} className="text-gray-600"/>}/>
            </div>
          </div>
       </div>
       <div>
           <p className="font-semibold text-lg">
            {data.name}
           </p>
           <p className="text-sm text-gray-500">
            {data.category.name}
           </p>
       </div>
       <div className="flex items-center justify-between">
         <CurrencyComponent value={data.price}/>
       </div>
     </div>
  )
}

export default ProductCard
import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0

const Homepage = async () => {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard("350895ea-2c02-4dd9-98e2-c9ec2effd8a8");
  return (
    <Container>
        <div className='space-y-10 pb-10'>
          <Billboard data={billboard} />
        </div>
        <div className='flex flex-col gap-y-8 px-4 lg:px-8'>
          <ProductList title="Featured Product" items={products} />
        </div>
    </Container>

  )
}

export default Homepage
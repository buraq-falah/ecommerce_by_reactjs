import React from 'react'
import TheMain from './the_main'
import SingleProduct from './single_product'
const popular_products = () => {
  return (
    <section>
      <TheMain title="Popular products" link="/popular_products" />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Array.from({ length: 9 }, (_, index) => index + 1).map((item) => {
        return ( <SingleProduct key={item} /> )
      })}
    </div>
    </section>
  )
}

export default popular_products
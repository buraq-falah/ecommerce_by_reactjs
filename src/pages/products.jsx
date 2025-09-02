import TheMain from '../components/the_main'
import SingleProduct from '../components/single_product'
import useAxios from '../hooks/useAxios'
import { Helmet } from 'react-helmet-async'

const Products = () => {
  const {data, error, loading} = useAxios('https://dummyjson.com/products')
  if(loading) return <p>Loading...</p>
  if(error) return <p className='text-red-500'>Error: {error}</p>
  console.log(data)
  return (
    <section>
      <Helmet>
            <title>All Products </title>
          </Helmet>
      <TheMain title="All Products" />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {data?.products?.length > 1 && data?.products?.map((item) => {
        return ( <SingleProduct key={item?.id} {...item}/> )
      })}
    </div>
    </section>
  )
}

export default Products
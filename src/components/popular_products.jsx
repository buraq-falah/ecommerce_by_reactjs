import TheMain from './the_main'
import SingleProduct from './single_product'
import useAxios from '../hooks/useAxios'
import Products from '../pages/products'
import ProductSkeleton from './product_skeleton'
const PopularProducts = () => {
  const {data, error, loading} = useAxios('https://dummyjson.com/products?sortBy=rating&order=desc&limit=9')
  if(error) return <p className='text-red-500'>Error: {error}</p>
  console.log(data)
  return (
    <section>
    <div className='animate-backInUp grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {data?.products?.length > 1 ? data?.products?.map((item) => {
        return ( <SingleProduct key={item?.id} {...item}/> )
      }) : (
        Array.from({length:10}, (_, index) => index + 1).map((item) => (
          <ProductSkeleton key={item}/>
        ))
      )}
    </div>
    </section>
  )
}

export default PopularProducts
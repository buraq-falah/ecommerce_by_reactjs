import TheMain from './the_main'
import SingleProduct from './single_product'
import useAxios from '../hooks/useAxios'
import Products from '../pages/products'
const PopularProducts = () => {
  const {data, error, loading} = useAxios('https://dummyjson.com/products?sortBy=rating&order=desc&limit=9')
  if(loading) return <p>Loading...</p>
  if(error) return <p className='text-red-500'>Error: {error}</p>
  console.log(data)
  return (
    <section>
      <TheMain title="Popular products" link="/Products" showButton={true}/>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {data?.products?.length > 1 && data?.products?.map((item) => {
        return ( <SingleProduct key={item?.id} {...item}/> )
      })}
    </div>
    </section>
  )
}

export default PopularProducts
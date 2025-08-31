import React from 'react'
import { Link } from 'react-router'
const main = ({title, link, showButton}) => {
  return (
   <div className='flex justify-between items-center my-4'>
     <h1 className='text-xl md:text:lg font-semibold'>{title}</h1>
     {showButton ? ( <Link to={link} className='btn-primary' >View More</Link> ) : null}
   </div>
  )
}
export default main
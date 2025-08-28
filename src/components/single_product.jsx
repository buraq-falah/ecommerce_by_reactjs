import { Rating, ThinStar } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import React from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}
const single_product = ({title, price, discountPercentage, rating, thumbnail}) => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={thumbnail}
            alt={title}
          />
        </a>
        {/* Discount badge */}
        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md">
          {discountPercentage}%
        </span>
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <Rating style={{ maxWidth: 150 }} value={parseInt(rating)} itemStyles={myStyles} /> 
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {parseInt(rating)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {/* Old price */}
            <span className="text-lg text-gray-500 line-through">$799</span>
            {/* New price */}
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {price}
            </span>
          </div>

          <div className="flex space-x-2 rtl:space-x-reverse">
            <button className="btn-secondary text-lg">
              <FaCartPlus />
            </button>
            <button className="btn-primary text-lg">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default single_product;

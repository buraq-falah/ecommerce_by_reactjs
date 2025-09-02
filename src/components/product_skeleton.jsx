// Skeleton version of the single_product component with animate pulse
const ProductSkeleton = () => (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 animate-pulse">
        <div className="relative">
            <div className="p-8 rounded-t-lg bg-gray-200 h-48 w-full" />
            {/* Discount badge skeleton */}
            <span className="absolute top-3 right-3 bg-gray-300 text-transparent text-xs font-bold px-2.5 py-1 rounded-lg shadow-md w-10 h-5" />
        </div>
        <div className="px-5 pb-5 mt-2">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
            {/* Rating skeleton */}
            <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <div className="h-5 w-24 bg-gray-200 rounded" />
                </div>
                <span className="bg-gray-200 text-transparent text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3 w-8 h-5" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-lg bg-gray-200 rounded w-16 h-5 mb-2" />
                    <span className="text-3xl font-bold bg-gray-200 rounded w-24 h-7" />
                </div>
                <div className="flex space-x-2 rtl:space-x-reverse">
                    <span className="btn-secondary text-lg bg-gray-200 rounded w-10 h-10" />
                    <span className="btn-primary text-lg bg-gray-200 rounded w-10 h-10" />
                </div>
            </div>
        </div>
    </div>
);

export default ProductSkeleton;
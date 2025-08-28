/**
 * Calculates the new price after applying a discount percentage.
 * @param {number} price - The original price.
 * @param {number} discountPercent - The discount percentage (0-100).
 * @returns {number} - The new price after discount, rounded to 2 decimals.
 */
function calculateDiscountedPrice(price, discountPercent) {
    if (typeof price !== 'number' || typeof discountPercent !== 'number') {
        throw new Error('Both price and discountPercent must be numbers.');
    }
    if (discountPercent < 0 || discountPercent > 100) {
        throw new Error('discountPercent must be between 0 and 100.');
    }
    const discount = price * (discountPercent / 100);
    const newPrice = price - discount;
    return Math.round(newPrice * 100) / 100;
}

export default calculateDiscountedPrice;
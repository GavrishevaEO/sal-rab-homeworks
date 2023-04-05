function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    
    let shippingSum;
    if (productsSum == 0 || productsSum >= freeShippingMinSum) {
        shippingSum = 0;
    } else {
        shippingSum = shippingPrice;
    }
        
    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах

    let discountSum;
    discountSum = productsSum >= discountMinSum ? (productsSum / 100) * discountPart : 0;
        
    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    let totalSum = productsSum;
    totalSum = totalSum - discountSum;
   
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum = totalSum + shippingSum;
    
    let freeShipping = shippingSum == 0;

    
    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}

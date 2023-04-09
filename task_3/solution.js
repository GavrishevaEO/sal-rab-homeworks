function renderCartItem(item) {
    const product = item;

    let itemCountText = "";
    itemCountText = itemCountText + product["count"];
    itemCountText = itemCountText + " x ";
    itemCountText = itemCountText + product["price"];
    itemCountText = itemCountText + " ₽ = ";
    let sum = product["count"] * product["price"];
    itemCountText = itemCountText + sum;
    itemCountText = itemCountText + " ₽";

    
    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}

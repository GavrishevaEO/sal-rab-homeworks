function renderCartItem(item) {
    const product = item;
    
let itemCountText = "";
itemCountText = itemCountText + product["count"] + " × " + product["price"] + " ₽ = ";
    
let sum = product["count"] * product["price"];
itemCountText = itemCountText + sum + " ₽";
    

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}

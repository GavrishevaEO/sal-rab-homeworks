function renderCartItem(item) {
    const product = item;
<<<<<<< HEAD

    let itemCountText = "";
    itemCountText = itemCountText + product["count"];
    itemCountText = itemCountText + " x ";
    itemCountText = itemCountText + product["price"];
    itemCountText = itemCountText + " ₽ = ";
    let sum = product["count"] * product["price"];
    itemCountText = itemCountText + sum;
    itemCountText = itemCountText + " ₽";
=======
    
let itemCountText = "";
itemCountText = itemCountText + product["count"] + " × " + product["price"] + " ₽ = ";
    
let sum = product["count"] * product["price"];
itemCountText = itemCountText + sum + " ₽";
    
>>>>>>> 2f69807c5f0b8ac2290ec8be815972ea52eab556

    
    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}

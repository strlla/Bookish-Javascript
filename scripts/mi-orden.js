window.addEventListener('load', function(){
    //CART DE PRUEBA
    let cartTest = {list: [{id: 1, title: 'Serpent & Dove', qty: 1, price: 1472.11}], size: 1, price: 1472.11};
    JSON.stringify(localStorage.setItem('cart', JSON.stringify(cartTest)));

    const cartContainer = document.getElementById('cartContainer');
    const cart = new Cart();
    cart.getCart().list.forEach(function(i){
        const item = buildCartCard(i);
        cartContainer.appendChild(item);
    })
})

function buildCartCard(item){
    const div = document.createElement('div');
    const title = document.createElement('h2')
    title.innerHTML = item.title;
    
    //const description = `<h1>${product.title}}</h1>`;
    const price = document.createElement('h4');
    price.innerHTML = item.price;
    //const button = domBuilder.button('Seleccionar', 'btnProduct', product.id);

    div.appendChild(title);
    div.appendChild(price);

    //div.appendChild(image);
    //div.appendChild(description);
    //div.appendChild(price);
  
    return div;
}
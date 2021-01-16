window.addEventListener('load', function(){
    const popularContainer = document.getElementById('popularContainer');
    
    getBooks().then((books)=>{
        books.books.forEach(function(b){
            const card = buildBookCard(b);
            popularContainer.appendChild(card);
        })
    })
})


function getBooks(){
    return fetch("../data/books.json")
    .then(response => response.json())
}

function buildBookCard(product){
    const div = document.createElement('div');
    const title = document.createElement('h2')
    title.innerHTML = product.title;

    const image = document.createElement('img');
    image.src = product.image;
    
    //const description = `<h1>${product.title}}</h1>`;
    const price = document.createElement('h4');
    price.innerHTML = product.price;
    //const button = domBuilder.button('Seleccionar', 'btnProduct', product.id);

    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(price);

    //div.appendChild(image);
    //div.appendChild(description);
    //div.appendChild(price);
  
    return div;
}


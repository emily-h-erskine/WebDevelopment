var removeitem = document.getElementById('buy-button');
// add a listener for add to cart if such a button id is pressed
removeitem.addEventListener("click", removeCart);

function removeCart()
{
    var total=localStorage.getItem('checkout');
    total = 0;
    localStorage.setItem('checkout',total);

    var bookCounter= localStorage.getItem('addBookToCart');
    var bookCounter= localStorage.getItem('addBookToCart1');
    var bookCounter= localStorage.getItem('addBookToCart2');
    var bookCounter= localStorage.getItem('addBookToCart3');
    var bookCounter= localStorage.getItem('addBookToCart4');
    var bookCounter= localStorage.getItem('addBookToCart5');
    bookCounter =0;
    localStorage.setItem('addBookToCart', bookCounter);
    localStorage.setItem('addBookToCart1', bookCounter);
    localStorage.setItem('addBookToCart2', bookCounter);
    localStorage.setItem('addBookToCart3', bookCounter);
    localStorage.setItem('addBookToCart4', bookCounter);
    localStorage.setItem('addBookToCart5', bookCounter);


    document.querySelector('#checkout').innerHTML=total;
}
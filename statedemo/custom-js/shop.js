// shop.js

function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}

var addBook = document.getElementById('addBookToCart');
addBook.addEventListener("click", addBookToCart);

var addBook1 = document.getElementById('addBookToCart1');
addBook1.addEventListener("click", addBookToCart1);

var addBook2 = document.getElementById('addBookToCart2');
addBook2.addEventListener("click", addBookToCart2);

var addBook3 = document.getElementById('addBookToCart3');
addBook3.addEventListener("click", addBookToCart3);

var addBook4 = document.getElementById('addBookToCart4');
addBook4.addEventListener("click", addBookToCart4);

var addBook5 = document.getElementById('addBookToCart5');
addBook5.addEventListener("click", addBookToCart5);
    



function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    console.log("------*******-------" + total);
}


function addBookToCart()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    
    var bookCounter= localStorage.getItem('addBookToCart');
    bookCounter++;
    localStorage.setItem('addBookToCart',bookCounter);


    console.log("Book Counter: "+bookCounter);
}

function addBookToCart1()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    
    var bookCounter= localStorage.getItem('addBookToCart1');
    bookCounter++;
    localStorage.setItem('addBookToCart1',bookCounter);


    console.log("Book Counter: "+bookCounter);
}

function addBookToCart2()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    
    var bookCounter= localStorage.getItem('addBookToCart2');
    bookCounter++;
    localStorage.setItem('addBookToCart2',bookCounter);


    console.log("Book Counter: "+bookCounter);
}

function addBookToCart3()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    
    var bookCounter= localStorage.getItem('addBookToCart3');
    bookCounter++;
    localStorage.setItem('addBookToCart3',bookCounter);


    console.log("Book Counter: "+bookCounter);
}

function addBookToCart4()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    
    var bookCounter= localStorage.getItem('addBookToCart4');
    bookCounter++;
    localStorage.setItem('addBookToCart4',bookCounter);


    console.log("Book Counter: "+bookCounter);
}

function addBookToCart5()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    
    var bookCounter= localStorage.getItem('addBookToCart5');
    bookCounter++;
    localStorage.setItem('addBookToCart5',bookCounter);


    console.log("Book Counter: "+bookCounter);
}

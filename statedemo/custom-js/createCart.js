   
BookPeanut();

  function BookPeanut()
  {
    var bookCounter= localStorage.getItem('addBookToCart');
    var bookCounter1= localStorage.getItem('addBookToCart1');
    var bookCounter2= localStorage.getItem('addBookToCart2');
    var bookCounter3= localStorage.getItem('addBookToCart3');
    var bookCounter4= localStorage.getItem('addBookToCart4');
    var bookCounter5= localStorage.getItem('addBookToCart5');
    var total= 0;
    localStorage.setItem('total', total);
    
    console.log("Book Counter: "+bookCounter);

    
      
    while(bookCounter >= 1)
    {
        createBook(0);
        bookCounter--;
        
    }
    while(bookCounter1 >=1)
    {
        createBook(1);
        bookCounter1--;     
    }
    while(bookCounter2 >= 1)
    {
        createBook(2);
        bookCounter2--;
        
    }
    while(bookCounter3 >=1)
    {
        createBook(3);
        bookCounter3--;     
    }
    while(bookCounter4 >= 1)
    {
        createBook(4);
        bookCounter4--;
        
    }
    while(bookCounter5 >=1)
    {
        createBook(5);
        bookCounter5--;     
    }
  }

function createBook(number)
{
    const bookImg = ["book4.JPG", "book5.jpg", "book8.JPG", "book1.jpg", "book6.JPG", "book7.JPG"];
    const bookName = ["Shatter Me", "The Sun is also a Star", "Bliss Books Blue Collection", "The Good Neighbourhood", "Naughts and Crosses", "Bliss Books Yellow Collection"];
    const bookPrice = [13.50, 14.99, 40.00, 13.99, 12.99, 60.00]
    
    let existingDiv = document.getElementById('div1');
        let newFirstDiv = document.createElement("div");
    
        newFirstDiv.style.width ="1000px";
        newFirstDiv.style.height="200px";
        newFirstDiv.style.marginLeft="80px";
    
        
       let newPara = document.createElement('p');
       newPara.style.marginLeft="15em";
       newPara.style.fontSize= "medium";

       let newImage = document.createElement("img");
    
       newImage.src= bookImg[number];
       newImage.alt= bookName[number];//setting the alt
       newImage.style.marginLeft="2em";
       newImage.style.marginBottom="2em";
       newImage.style.marginRight="2em";
       newImage.style.width="25%";
       newImage.style.float="left";
    
      // newImage.style.textAlign="center";
    
    
      let newPara2 = document.createElement('p');
      //newPara2.style.marginLeft="15em";
      newPara2.style.fontSize= "large";
      newPara2.style.marginLeft="10em";
      //newPara2.style="width:70em";
      newPara2.innerHTML= bookName[number];
      newPara2.style.float="center";
    
      let newParaQuantity = document.createElement('p');
      //newPara2.style.marginLeft="15em";
      newParaQuantity.style.fontSize= "medium";
      newParaQuantity.style.marginright="10em";
      //newPara2.style="width:70em";
      newParaQuantity.innerHTML= "€" + bookPrice[number];
      newParaQuantity.style.float="right";
    
    
    var total = localStorage.getItem('total');
    total = +total + +bookPrice[number];
    localStorage.setItem('total', total);
    let n = total.toFixed(2);
    document.getElementById("total").innerHTML = "€" + n;
    
    //   let newSecondDiv = document.createElement('div');
    //   newSecondDiv.style.width ="800px";
    //      newSecondDiv.style.height="100px";
    //      newSecondDiv.style.marginLeft="100px";
    //      newSecondDiv.style.backgroundColor="black";
    //      newSecondDiv.style.marginLeft="15em";
    
    
       //  let newSecondDiv = document.createElement("div");
    
       //  newSecondDiv.style.width ="1700px";
       //  newSecondDiv.style.height="1500px";
       //  newSecondDiv.innerHTML="YES DIVS"
       //  newFirstDiv.appendChild(newSecondDiv);
        existingDiv.appendChild(newFirstDiv);
    
      
    
       
    
       newFirstDiv.appendChild(newPara);
       newFirstDiv.appendChild(newParaQuantity);
       newFirstDiv.appendChild(newImage);
    
       newFirstDiv.appendChild(newPara2);
}
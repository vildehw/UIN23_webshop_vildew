let cart = []  

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})  

    console.log(cart)  
    renderCart() 
    document.querySelector("#cart .label").innerHTML = cart.length   

    //Oppgave 1
    document.querySelector("#cartview").classList.remove("hidden") 
    //Oppgave 1 del 2
    //document.querySelector("#cartview").classList.includes("hidden") ? document.querySelector("#cartview").classList.remove("hidden") : null 

    //Oppgave 2
    let totalPrice = 0  
    cart.map(prod => totalPrice += prod.productPrice) 
    document.getElementById("total").innerHTML = totalPrice
    
} 

function renderCart() {
    let listHTML = "" 
    cart.map(prod => listHTML += `<li>
        <span class="title">${prod.productTitle}</span> 
        <span class="price">${prod.productPrice}</span> 
        <span class="quantity">${prod.productQuantity}</span> 
        <button onClick="deleteProduct()" class="delete">X</button>
        </li>`)   
    document.querySelector("#cartview ul").innerHTML = listHTML
    
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}  


function deleteProduct(product) {
    let index = cart.indexOf(product)
    cart.map(index => cart.splice(index, 1)) 

    renderCart()

    console.log(cart)
    console.log(index)
    console.log("deleted") 
}


 
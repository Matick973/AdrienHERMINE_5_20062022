function confirm(){
    const display = document.getElementById("orderId").innerText = localStorage.getItem("orderId");
    localStorage.clear(); //clearCart()
    cart = [];
    contact = {};
    
}

confirm();
function confirm(){
    const display = document.getElementById("orderId").innerText = localStorage.getItem("orderId");
    cart = [];
    contact = {};
    localStorage.clear(); //clearCart()
}

confirm();
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


  document.getElementById("formcontents").addEventListener("submit", enterForm);

function reservesuccess() {
    alert("Successfully booked a seat.")
}



function cartsuccess() {
    alert("Added to cart")

}


function addtocart() {
    document.getElementsByClassName("cart-button-text").innerHTML = "Added to cart"

}

const popup = document.querySelector(".full-screen")

function togglePopup() {
    popup.classList.toggle('hidden')
}
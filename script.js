window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function reservesuccess() {
    alert("Successfully booked a seat.")
}

function cartsuccess() {
    alert("Added to cart")
}

function accountsuccess() {
    alert("Successfully logged in!")
}

function hamburger() {
    var x = document.getElementById("links");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav"
    }
}
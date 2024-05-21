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

function mobilenav() {
    if (document.getElementById("mobilenav").className == "mobilenavshow") {
        document.getElementById("mobilenav").className = "mobilenavhide"
    } else {
        document.getElementById("mobilenav").className = "mobilenavshow"
    }
}
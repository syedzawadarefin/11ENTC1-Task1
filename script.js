window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

function search() {
    var input, filter, li, ul, a, i;
    input = document.getElementById("query");
    filter = input.value.toUpperCase();
    console.log(filter)
    li = document.getElementById("menu-item");
    console.log(li)
    ul = document.getElementsByClassName("item-text");
    console.log(ul)

    console.log(li.length)
    for (i = 0; i < li.length; i++) {
        console.log("yes!")
        a = li[i].getElementsByTagName("span")[0];
        if (a.children[0].children[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none"
        }
    }
}

function addtocart() {
    document.getElementsByClassName("cart-button-text").innerHTML = "Added to cart"
}
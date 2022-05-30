// On clicking remove button the item should be removed from DOM as well as localstorage.
let data = JSON.parse(localStorage.getItem("coffee"));

var sum = data.reduce(function(acc,elem){
    return acc+Number(elem.price)
},0)
console.log(sum);
document.getElementById("total_amount").append(sum)

data.forEach(function(elem,index){
    console.log(data)


    let box = document.createElement("div");
    box.setAttribute("class","box");

    let image = document.createElement("img");
    image.src = elem.image;
    image.setAttribute("class","image")

    let title = document.createElement("h2");
    title.innerText = elem.title;
    title.setAttribute("class","title");

    let price = document.createElement("p");
    price.innerText = elem.price;
    price.setAttribute("class","price")

    let ing = document.createElement("p")
    ing.innerText = elem.ingredients;
    ing.setAttribute("class","ingre")

    let remove = document.createElement("button")
    remove.innerText = "Remove"
    remove.setAttribute("id","remove_coffee")
    remove.addEventListener("click", function( ){

        removefun(elem,index)
    })

    box.append(image,title,price,ing,remove);
    document.querySelector("#bucket").append(box)
})

function removefun(elem,index){
    data.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(data));
    window.location.reload( );
}


function checkout(){
    window.location.href = "checkout.html"
}


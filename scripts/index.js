// Add the coffee to local storage with key "coffee"
function mybucket (){
    window.location.href = "bucket.html"
}

let url = "https://masai-mock-api.herokuapp.com/coffee/menu"

fetch (url).then(function(res){
    res.json().then(function(res){
        console.log(res.menu.data)
        appendfun(res.menu.data)
    })
})
.catch(function(err){
    console.log(err)
})

var arr = JSON.parse(localStorage.getItem("coffee")) ||  [ ];

function appendfun(data){
console.log(data)

    data.forEach(function(elem){

        let box = document.createElement("div");
        box.setAttribute("class","box");

        let image = document.createElement("img");
        image.src = elem.image;
        image.setAttribute("class","image")

        let title = document.createElement("h2");
        title.innerText = elem.title;
        title.setAttribute("class","title");

        let price = document.createElement("p");
        price.textContent = elem.price;
        price.setAttribute("class","price")

        let ingredients = document.createElement("p");
        ingredients.innerText = elem.ingredients;
        ingredients.setAttribute("class","ingre")

        let button = document.createElement("button")
        button.innerText = "Add To Bucket";
        button.setAttribute("id","add_to_bucket")
        button.addEventListener("click", function( ){
            bucketbutton(elem)
        })

        box.append(image,title,price,ingredients,button)

        document.getElementById("menu").append(box);
        console.log(box)
        })
}

function bucketbutton(elem){
    arr.push(elem)
    localStorage.setItem("coffee",JSON.stringify(arr));
}
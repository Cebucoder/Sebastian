

let cart = [
	// {
	// 	productImg: "./product/prod1.jpg",
	// 	productName: "UNRESOLVED ISSUES",
	// 	productPrice: 400
	// }
	
];

// adding the item to array
function addToCart(img,name,price){
	cart.push({productImg: img,productName: name, productPrice: price});
	// JSON.tringify is to allow you red the the inide the array without jason.stringiy the reslt is object object
	localStorage.setItem("cartStorage", JSON.stringify(cart));
	// showCart();
}

let cartStorages = JSON.parse(localStorage.getItem("cartStorage"));
let cartContainer = document.getElementById("cartItems");
function showCart(){
	
	// let img
	// adding the amount
	let totalAmount = 0;
	let itemNumber = 0;
	// let localStorage = "none";
	// getting the  items from a local storage and coberted to object using JSON.parse
	cartStorages.forEach(function(cartItems){
		cartContainer.innerHTML += 

		`
		<li>
		<img src = "${cartItems.productImg}">
		<small>${cartItems.productName}</small
		<span>${cartItems.productPrice}</span>
		<ion-icon class="remove" onclick= "removeItem(${itemNumber})" name="trash"></ion-icon>
		</li>

		`;

		itemNumber++;

		// adding the mount
		totalAmount += Number(cartItems.productPrice);
	});
	// alert("Total Amount:"+totalAmount);
	document.getElementById("total").innerHTML = "₱"+totalAmount.toLocaleString();
}



function removeItem(itemNumber){
	cartStorages.splice(itemNumber, 1);
	localStorage.setItem("cartStorage", JSON.stringify(cart));
	cartContainer.innerHTML = "";
	showCart();
}













let carts = document.getElementById('cart-cont');
let cartActive = document.getElementById("active");
let menu = document.getElementById("navlinks");

function addCart() {
	carts.classList.toggle("toggle-cart");
	cartActive.classList.toggle("icon-active");
}
function openMenu(){
	menu.classList.toggle("show-Menu");
}




let cart = document.getElementById('cart-cont');
let cartActive = document.getElementById("active");

function addCart() {
	cart.classList.toggle("toggle-cart");
	cartActive.classList.toggle("icon-active");
}


// adding cart to cart container
	

function addToCart(){

	// let history  = document.querySelector("#tied-history").innerHTML;
	let Items = document.querySelector("#cartItems");
	let img  = document.getElementById("product1").src;
	let price  = document.getElementById("price").innerHTML;
	let details  = document.getElementById("details").innerHTML;
	// let humanChoice = ['paper.png'];
			
	//let previous = document.getElementById("previous").innerHTML = ;
	let div = document.getElementById('cartItems').value = `<a href = "cart.html"><img src = "${img}"></a><small>${details}</small><span>${price}</span>`;
	let taskitem = document.createElement("li");
	taskitem.innerHTML = div;
	Items.appendChild(taskitem);
	// alert(div+"Is Successfully added to History");
	

}

function addToCart2(){

	// let history  = document.querySelector("#tied-history").innerHTML;
	let Items = document.querySelector("#cartItems");
	let img  = document.getElementById("product2").src;
	let price  = document.getElementById("price2").innerHTML;
	let details  = document.getElementById("details2").innerHTML;
	// let humanChoice = ['paper.png'];
			
	//let previous = document.getElementById("previous").innerHTML = ;
	let div = document.getElementById('cartItems').value = `<img src = "${img}"><small>${details}</small><span>${price}</span>`;
	let taskitem = document.createElement("li");
	taskitem.innerHTML = div;
	Items.appendChild(taskitem);
	// alert(div+"Is Successfully added to History");

}

function addToCart3(){

	// let history  = document.querySelector("#tied-history").innerHTML;
	let Items = document.querySelector("#cartItems");
	let img  = document.getElementById("product3").src;
	let price  = document.getElementById("price3").innerHTML;
	let details  = document.getElementById("details3").innerHTML;
	// let humanChoice = ['paper.png'];
			
	//let previous = document.getElementById("previous").innerHTML = ;
	let div = document.getElementById('cartItems').value = `<img src = "${img}"><small>${details}</small><span>${price}</span>`;
	let taskitem = document.createElement("li");
	taskitem.innerHTML = div;
	Items.appendChild(taskitem);
	// alert(div+"Is Successfully added to History");


}

function addToCart4(){

	// let history  = document.querySelector("#tied-history").innerHTML;
	let Items = document.querySelector("#cartItems");
	let img  = document.getElementById("product4").src;
	let price  = document.getElementById("price4").innerHTML;
	let details  = document.getElementById("details4").innerHTML;
	// let humanChoice = ['paper.png'];
			
	//let previous = document.getElementById("previous").innerHTML = ;
	let div = document.getElementById('cartItems').value = `<img src = "${img}"><small>${details}</small><span>${price}</span>`;
	let taskitem = document.createElement("li");
	taskitem.innerHTML = div;
	Items.appendChild(taskitem);
	// alert(div+"Is Successfully added to History");

}
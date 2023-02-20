
let cart = document.getElementById('cart-cont');
let cartActive = document.getElementById("active");
let cartItems = [];

function addCart() {
	cart.classList.toggle("toggle-cart");
	cartActive.classList.toggle("icon-active");
}


// adding cart to cart container
	

function addToCart(){

	// // let history  = document.querySelector("#tied-history").innerHTML;
	// let Items = document.querySelector("#cartItems");
	// let img  = document.getElementById("product1").src;
	// let price  = document.getElementById("price").innerHTML;
	// let details  = document.getElementById("details").innerHTML;
	// // let humanChoice = ['paper.png'];
			
	// //let previous = document.getElementById("previous").innerHTML = ;
	// let div = document.getElementById('cartItems').value = `<img src = "${img}"><small>${details}</small><span>${price}</span>`;
	// let taskitem = document.createElement("li");
	// taskitem.innerHTML = div;
	// Items.appendChild(taskitem);
	// // alert(div+"Is Successfully added to History");
	// // document.getElementById("cartItems").innerHTML = localStorage.getItem(details,price);

	// sessionStorage.setItem('product',taskitem);

	let item = {


	    img: document.getElementById("product1").src,
	    price: document.getElementById("price").innerHTML,
	    details: document.getElementById("details").innerHTML
  };
	  cartItems.push(item);
	  localStorage.setItem('cartItems', JSON.stringify(cartItems));

}



function addToCart2(){

	// // let history  = document.querySelector("#tied-history").innerHTML;
	// let Items = document.querySelector("#cartItems");
	// let img  = document.getElementById("product2").src;
	// let price  = document.getElementById("price2").innerHTML;
	// let details  = document.getElementById("details2").innerHTML;
	// // let humanChoice = ['paper.png'];
			
	// //let previous = document.getElementById("previous").innerHTML = ;
	// let div = document.getElementById('cartItems').value = `<img src = "${img}"><small>${details}</small><span>${price}</span>`;
	// let taskitem = document.createElement("li");
	// taskitem.innerHTML = div;
	// Items.appendChild(taskitem);
	// // alert(div+"Is Successfully added to History");

	// localStorage.setItem(details, price);
	// localStorage.getItem(details,price);

	let item = {


	    img: document.getElementById("product2").src,
	    price: document.getElementById("price2").innerHTML,
	    details: document.getElementById("details2").innerHTML
  };
	  cartItems.push(item);
	  localStorage.setItem('cartItems', JSON.stringify(cartItems));

}


function addToCart3(){

	// // let history  = document.querySelector("#tied-history").innerHTML;
	// let Items = document.querySelector("#cartItems");
	// let img  = document.getElementById("product3").src;
	// let price  = document.getElementById("price3").innerHTML;
	// let details  = document.getElementById("details3").innerHTML;
	// // let humanChoice = ['paper.png'];
			
	// //let previous = document.getElementById("previous").innerHTML = ;
	// let div = document.getElementById('cartItems').value = `<img src = "${img}"><small>${details}</small><span>${price}</span>`;
	// let taskitem = document.createElement("li");
	// taskitem.innerHTML = div;
	// Items.appendChild(taskitem);
	// // alert(div+"Is Successfully added to History");

	// localStorage.setItem(details, price);
	// localStorage.getItem(details,price);

	let item = {


	    img: document.getElementById("product3").src,
	    price: document.getElementById("price3").innerHTML,
	    details: document.getElementById("details3").innerHTML
  };
	  cartItems.push(item);
	  localStorage.setItem('cartItems', JSON.stringify(cartItems));

}

function addToCart4(){

	// // let history  = document.querySelector("#tied-history").innerHTML;
	// let Items = document.querySelector("#cartItems");
	// let img  = document.getElementById("product4").src;
	// let price  = document.getElementById("price4").innerHTML;
	// let details  = document.getElementById("details4").innerHTML;
	// // let humanChoice = ['paper.png'];
			
	// //let previous = document.getElementById("previous").innerHTML = ;
	// let div = document.getElementById('cartItems').value = `<img src = "${img}"><small>${details}</small><span>${price}</span>`;
	// let taskitem = document.createElement("li");
	// taskitem.innerHTML = div;
	// Items.appendChild(taskitem);
	// // alert(div+"Is Successfully added to History");

	// localStorage.setItem(details, price);
	// localStorage.getItem(details,price);

	let item = {


	    img: document.getElementById("product4").src,
	    price: document.getElementById("price4").innerHTML,
	    details: document.getElementById("details4").innerHTML
  };
	  cartItems.push(item);
	  localStorage.setItem('cartItems', JSON.stringify(cartItems));

}



// ===============================================


// ==========================
function loadCart() {
  let storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    cartItems = JSON.parse(storedCartItems);
    let cartItemsEl = document.querySelector("#cartItems");
    for (let i = 0; i < cartItems.length; i++) {
      let item = cartItems[i];
      let div = `<a href="cart.html"><img src="${item.img}"></a><small>${item.details}</small><span>${item.price}</span>`;
      let taskitem = document.createElement("li");
      taskitem.innerHTML = div;
      cartItemsEl.appendChild(taskitem);
    }
  }
}

loadCart();
// In this implementation, cartItems is an array that stores the items added to the cart. When the user clicks the "Add to Cart" button, the addToCart function creates an object with the item's details, adds it to the cartItems array, and saves the array to the localStorage. When the page loads or refreshes, the loadCart function retrieves the cartItems array from the localStorage, creates a list element for each item in the array, and appends it to the cart.





// ==========================

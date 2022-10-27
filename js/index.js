// ITERATION 3
let contador = 0
// ITERATION 1
function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  let total = +quantity.value * +price.innerText
  subtotal.innerText = total
  contador += total
  return total
}

function calculateAll() {
// ITERATION 1
//const singleProduct = document.querySelector('.product');
//updateSubtotal(singleProduct);
// ITERATION 2
  const allProducts =  document.querySelectorAll('.product')
  console.log(allProducts)
  let contTtotal = allProducts.forEach(produto => updateSubtotal(produto))
// ITERATION 3
  const tot = document.querySelector('#total-value > span')
  tot.innerText = contador
  contador = 0

  // end of test


  //... your code goes here
}

// ITERATION 4



function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
});

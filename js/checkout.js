document.addEventListener("DOMContentLoaded", function() {
    // Retrieve products and total amount from localStorage
    const products = JSON.parse(localStorage.getItem("products"));
    let finalTotal = parseFloat(localStorage.getItem("finalTotal"));

    // Filter out products with quantity 0
    const filteredProducts = products.filter(product => product.quantity > 0);

    // Display the total amount wherever you want in the HTML
    const totalAmountElement = document.getElementById("total-amount");
    totalAmountElement.textContent = "$" + finalTotal.toFixed(2);

    // Populate the product list
    const productListElement = document.querySelector("tbody");
    filteredProducts.forEach(product => {
        const productRow = document.createElement("tr");
        productRow.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}"></td>
            <td>${product.brand}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>$${(product.price * product.quantity).toFixed(2)}</td>`;
        productListElement.appendChild(productRow);
    });
});
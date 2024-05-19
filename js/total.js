document.querySelectorAll(".quantity").forEach(quantityInput => {
    quantityInput.addEventListener("change", function() {
        updateTotal();
    });
});

function updateTotal() {
    const quantities = document.querySelectorAll(".quantity");
    let total = 0;

    quantities.forEach(quantityInput => {
        const row = quantityInput.parentNode.parentNode; // Get the table row
        const unitPrice = parseFloat(row.cells[4].textContent.slice(1)); // Remove '$' sign
        const quantity = parseInt(quantityInput.value);
        const productTotal = unitPrice * quantity;
        total += productTotal;
        row.cells[5].textContent = "$" + productTotal.toFixed(2); // Update total for this product
    });

    document.getElementById("final-total").textContent = "$" + total.toFixed(2); // Update final total
}

document.getElementById("update-total").addEventListener("click", function() {
    updateTotal();
});

document.getElementById("checkout-btn").addEventListener("click", function() {
    const quantities = document.querySelectorAll(".quantity");
    let products = [];
    let finalTotal = parseFloat(document.getElementById("final-total").textContent.slice(1)); // Remove '$' sign

    if (finalTotal === 0) {
        alert("Please update the total amount before checking out.");
    } else {
        quantities.forEach(quantityInput => {
            const row = quantityInput.parentNode.parentNode; // Get the table row
            const product = {
                image: row.cells[0].querySelector('img').src,
                brand: row.cells[1].textContent,
                name: row.cells[2].textContent,
                quantity: parseInt(quantityInput.value),
                price: parseFloat(row.cells[4].textContent.slice(1)) // Remove '$' sign
            };
            products.push(product);
        });

        // Store products and total amount in localStorage
        localStorage.setItem("products", JSON.stringify(products));
        localStorage.setItem("finalTotal", finalTotal);

        // Navigate to the checkout page
        window.location.href = "checkout.html";
    }
});
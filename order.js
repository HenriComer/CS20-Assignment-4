// Prices for items
const HOTDOG_PRICE = 4.80;
const FRIES_PRICE = 3.95;
const SODA_PRICE = 1.99;
const DISCOUNT_THRESHOLD = 25;
const DISCOUNT_PERCENTAGE = 0.10;
const TAX_RATE = 0.0625;

// Function to calculate total
function calculateOrder() {
    // Get quantities from form inputs
    const numDogs = parseInt(document.getElementById("numDogs").value) || 0;
    const numFries = parseInt(document.getElementById("numFries").value) || 0;
    const numSoda = parseInt(document.getElementById("numSoda").value) || 0;

    // Calculate individual item totals
    const dogsTotal = numDogs * HOTDOG_PRICE;
    const friesTotal = numFries * FRIES_PRICE;
    const sodaTotal = numSoda * SODA_PRICE;

    // Subtotal before discount
    let subtotal = dogsTotal + friesTotal + sodaTotal;

    // Apply discount if eligible
    let discount = 0;
    if (subtotal >= DISCOUNT_THRESHOLD) {
        discount = subtotal * DISCOUNT_PERCENTAGE;
        subtotal -= discount;
    }

    // Calculate tax and final total
    const tax = subtotal * TAX_RATE;
    const finalTotal = subtotal + tax;

    // Display order summary
    document.getElementById("summary-details").innerHTML = `
        <p>Hotdogs: ${numDogs} ($${showMoney(dogsTotal)})</p>
        <p>French Fries: ${numFries} ($${showMoney(friesTotal)})</p>
        <p>Soda: ${numSoda} ($${showMoney(sodaTotal)})</p>
        <p>Subtotal (before discount): $${showMoney(dogsTotal + friesTotal + sodaTotal)}</p>
        <p>Discount: $${showMoney(discount)}</p>
        <p>Subtotal (after discount): $${showMoney(subtotal)}</p>
        <p>Tax: $${showMoney(tax)}</p>
        <p><strong>Final Total: $${showMoney(finalTotal)}</strong></p>
    `;
}

// Function to round to 2 decimal places (without using toFixed)
function showMoney(value) {
    return Math.round(value * 100) / 100;
}

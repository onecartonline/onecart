function searchProduct() {
    // Get the input value
    let query = document.getElementById("searchInput").value.trim();

    if (query === "") {
        alert("Please enter a product name");
        return;
    }

    // Insert the result cards into the page
    document.getElementById("results").innerHTML = `
        <div class="card">
            <img src="image/jumia.png" alt="Jumia Logo">
            <h4>Jumia</h4>
            <a href="https://www.jumia.co.ke/catalog/?q=${query}" target="_blank">Search</a>
        </div>

        <div class="card">
            <img src="image/kilimal.png" alt="Kilimall Logo">
            <h4>Kilimall</h4>
            <a href="https://www.kilimall.co.ke" target="_blank">Visit Store</a>
        </div>

        <div class="card">
            <img src="image/aliexpress.png" alt="AliExpress Logo">
            <h4>AliExpress</h4>
            <a href="https://www.aliexpress.com/wholesale?SearchText=${query}" target="_blank">Search</a>
        </div>
    `;
}
// Add event listener to trigger search on Enter key
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProduct();
    }
});
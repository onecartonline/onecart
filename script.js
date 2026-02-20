document.addEventListener("DOMContentLoaded", function () {

    function searchProduct() {
        const input = document.getElementById("searchInput");
        const results = document.getElementById("results");

        const query = input.value.trim();

        if (query === "") {
            alert("Please enter a product name");
            return;
        }

        results.innerHTML = `
            <div class="card">
                <div class="logo-circle">
                    <img src="image/jumia.png" alt="Jumia Logo">
                </div>
                <h4>Jumia</h4>
                <a href="https://www.jumia.com/search/?q=${encodeURIComponent(query)}" target="_blank">Search</a>
            </div>

            <div class="card">
                <div class="logo-circle">
                    <img src="image/amazon.png" alt="Amazon Logo">
                </div>
                <h4>Amazon AE</h4>
                <a href="https://www.amazon.ae/s?k=${encodeURIComponent(query)}" target="_blank">Search</a>
            </div>

            <div class="card">
                <div class="logo-circle">
                    <img src="image/shein.png.jpg" alt="Shein Logo">
                </div>
                <h4>Shein</h4>
                <a href="https://www.shein.com/search?keyword=${encodeURIComponent(query)}" target="_blank">Search</a>
            </div>
        `;
    }

    // Make button work
    window.searchProduct = searchProduct;

    // Make Enter key work
    document.getElementById("searchInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

});

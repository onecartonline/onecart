document.addEventListener("DOMContentLoaded", function () {

    function searchProduct() {
        let query = document.getElementById("searchInput").value.trim();

        if (query === "") {
            alert("Please enter a product name");
            return;
        }

        document.getElementById("results").innerHTML = `
            <div class="card">
                <img src="image/jumia.png" alt="Jumia Logo">
                <h4>Jumia</h4>
                <a href="#" target="_blank">Search</a>
            </div>

            <div class="card">
                <img src="image/kilimal.png" alt="Kilimall Logo">
                <h4>Kilimall</h4>
                <a href="#" target="_blank">Search</a>
            </div>

            <div class="card">
                <img src="image/aliexpress.png" alt="AliExpress Logo">
                <h4>AliExpress</h4>
                <a href="https://rzekl.com/g/1e8d1144945e0ae67a0c16525dc3e8/?SearchText=${query}" target="_blank">
                    Search
                </a>
            </div>
        `;
    }

    // Expose function for button
    window.searchProduct = searchProduct;

    // Enter key
    document.getElementById("searchInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

});


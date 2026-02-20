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
                    <img src="image/kilimal.png" alt="Kilimall Logo">
                </div>
                <h4>Kilimall</h4>
                <a href="https://www.kilimall.co.ke/catalogsearch/result/?q=${encodeURIComponent(query)}" target="_blank">Search</a>
            </div>

            <div class="card">
                <div class="logo-circle">
                    <img src="image/aliexpress.png" alt="AliExpress Logo">
                </div>
                <h4>AliExpress</h4>
                <a href="https://rzekl.com/g/1e8d1144945e0ae67a0c16525dc3e8/?SearchText=${encodeURIComponent(query)}" target="_blank">Search</a>
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
                    <img src="image/ebay.png" alt="eBay Logo">
                </div>
                <h4>eBay</h4>
                <a href="https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}" target="_blank">Search</a>
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

    // Make Search button work
    window.searchProduct = searchProduct;

    // Make Enter key work
    document.getElementById("searchInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

});

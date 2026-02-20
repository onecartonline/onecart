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
                <h4>Jumia (Africa)</h4>
                <a href="https://www.jumia.com/search/?q=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search on Jumia</a>
            </div>

            <div class="card">
                <img src="image/kilimal.png" alt="Kilimall Logo">
                <h4>Kilimall (Kenya)</h4>
                <a href="https://www.kilimall.co.ke/catalogsearch/result/?q=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search on Kilimall</a>
            </div>

            <div class="card">
                <img src="image/aliexpress.png" alt="AliExpress Logo">
                <h4>AliExpress (Worldwide)</h4>
                <a href="https://rzekl.com/g/1e8d1144945e0ae67a0c16525dc3e8/?SearchText=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search on AliExpress</a>
            </div>

            <div class="card">
                <img src="image/amazon.png" alt="Amazon AE Logo">
                <h4>Amazon AE (UAE)</h4>
                <a href="https://www.amazon.ae/s?k=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search on Amazon AE</a>
            </div>

            <div class="card">
                <img src="image/ebay.png" alt="eBay Logo">
                <h4>eBay (Worldwide)</h4>
                <a href="https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search on eBay</a>
            </div>

            <div class="card">
                <img src="image/shein.png.jpg" alt="Shein Logo">
                <h4>Shein (Worldwide)</h4>
                <a href="https://www.shein.com/search?keyword=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search on Shein</a>
            </div>
        `;
    }

    // Expose function for button
    window.searchProduct = searchProduct;

    // Enter key triggers search
    document.getElementById("searchInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

});


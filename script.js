alert("JavaScript is working");
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const results = document.getElementById("results");

    function searchProduct() {
        const query = searchInput.value.trim();
        if (!query) {
            alert("Please enter a product name");
            return;
        }

        results.innerHTML = `
            <div class="card" style="background:#ffe6e6;">
                <div class="logo-circle"><img src="image/jumia.png" alt="Jumia Logo"></div>
                <h4>Jumia</h4>
                <p>Popular African online marketplace</p>
                <a href="https://www.jumia.com/search/?q=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search</a>
            </div>

            <div class="card" style="background:#e6f7ff;">
                <div class="logo-circle"><img src="image/kilimal.png" alt="Kilimall Logo"></div>
                <h4>Kilimall</h4>
                <p>Affordable products in Kenya</p>
                <a href="https://www.kilimall.co.ke/catalogsearch/result/?q=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search</a>
            </div>

            <div class="card" style="background:#fff0e6;">
                <div class="logo-circle"><img src="image/aliexpress.png" alt="AliExpress Logo"></div>
                <h4>AliExpress</h4>
                <p>Global online marketplace with deals</p>
                <a href="https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search</a>
            </div>

            <div class="card" style="background:#e6ffe6;">
                <div class="logo-circle"><img src="image/amazon.png" alt="Amazon Logo"></div>
                <h4>Amazon AE</h4>
                <p>Trusted UAE online store</p>
                <a href="https://www.amazon.ae/s?k=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search</a>
            </div>

            <div class="card" style="background:#f0e6ff;">
                <div class="logo-circle"><img src="image/ebay.png" alt="eBay Logo"></div>
                <h4>eBay</h4>
                <p>Worldwide marketplace for buyers & sellers</p>
                <a href="https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search</a>
            </div>

            <div class="card" style="background:#fff5e6;">
                <div class="logo-circle"><img src="image/shein.png.jpg" alt="Shein Logo"></div>
                <h4>Shein</h4>
                <p>Trendy fashion & accessories</p>
                <a href="https://www.shein.com/search?keyword=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search</a>
            </div>
        `;
    }

    // Button click
    searchBtn.addEventListener("click", searchProduct);

    // Enter key press
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

});


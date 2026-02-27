document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const results = document.getElementById("results");
    const toggleBtn = document.getElementById("darkModeToggle");

    // SEARCH FUNCTION
    function searchProduct() {
        const query = searchInput.value.trim();

        if (!query) {
            alert("Please enter a product name");
            return;
        }

        results.innerHTML = `
            <div class="card">
                <img src="image/jumia.png" alt="Jumia">
                <h4>Jumia</h4>
                <a href="https://www.jumia.com/search/?q=${encodeURIComponent(query)}" target="_blank">Search</a>
            </div>

            <div class="card">
                <img src="image/kilimal.png" alt="Kilimall">
                <h4>Kilimall</h4>
                <a href="https://www.kilimall.co.ke/catalogsearch/result/?q=${encodeURIComponent(query)}" target="_blank">Search</a>
            </div>

            <div class="card">
                <img src="image/aliexpress.png" alt="AliExpress">
                <h4>AliExpress</h4>
                <a href="https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(query)}" target="_blank">Search</a>
            </div>

            <div class="card">
                <img src="image/amazon.png" alt="Amazon">
                <h4>Amazon AE</h4>
                <a href="https://www.amazon.ae/s?k=${encodeURIComponent(query)}" target="_blank">Search</a>
            </div>

            <div class="card">
                <img src="image/ebay.png" alt="eBay">
                <h4>eBay</h4>
                <a href="https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}" target="_blank">Search</a>
            </div>

            <div class="card">
                <img src="image/shein.png" alt="Shein">
                <h4>Shein</h4>
                <a href="https://www.shein.com/search?keyword=${encodeURIComponent(query)}" target="_blank">Search</a>
            </div>
        `;
    }

    searchBtn.addEventListener("click", searchProduct);

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

    // DARK MODE
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");
    });

});

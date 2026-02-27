document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const results = document.getElementById("results");
    const darkToggle = document.getElementById("darkToggle");

    // Dark mode toggle
    darkToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark");
        darkToggle.textContent = document.body.classList.contains("dark") ? "☀ Light Mode" : "🌙 Dark Mode";
    });

    // Search function
    function searchProduct() {
        const query = searchInput.value.trim();
        if (!query) { alert("Please enter a product name"); return; }

        results.innerHTML = `
            <div class="card"><img src="image/jumia.png" alt="Jumia"><h4>Jumia</h4><p>Popular African online marketplace</p><a href="https://www.jumia.com/search/?q=${encodeURIComponent(query)}" target="_blank">Search</a></div>
            <div class="card"><img src="image/kilimal.png" alt="Kilimall"><h4>Kilimall</h4><p>Affordable products in Kenya</p><a href="https://www.kilimall.co.ke/catalogsearch/result/?q=${encodeURIComponent(query)}" target="_blank">Search</a></div>
            <div class="card"><img src="image/aliexpress.png" alt="AliExpress"><h4>AliExpress</h4><p>Global online marketplace with deals</p><a href="https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(query)}" target="_blank">Search</a></div>
            <div class="card"><img src="image/amazon.png" alt="Amazon AE"><h4>Amazon AE</h4><p>Trusted UAE online store</p><a href="https://www.amazon.ae/s?k=${encodeURIComponent(query)}" target="_blank">Search</a></div>
            <div class="card"><img src="image/ebay.png" alt="eBay"><h4>eBay</h4><p>Worldwide marketplace</p><a href="https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}" target="_blank">Search</a></div>
            <div class="card"><img src="image/shein.png" alt="Shein"><h4>Shein</h4><p>Trendy fashion & accessories</p><a href="https://www.shein.com/search?keyword=${encodeURIComponent(query)}" target="_blank">Search</a></div>
        `;
    }

    searchBtn.addEventListener("click", searchProduct);
    searchInput.addEventListener("keydown", function(e) { if(e.key==="Enter") searchProduct(); });

});

document.addEventListener("DOMContentLoaded", function () {

    function searchProduct() {
        const input = document.getElementById("searchInput");
        const results = document.getElementById("results");
        const loading = document.getElementById("loading");

        const query = input.value.trim();

        if (query === "") {
            alert("Please enter a product name");
            return;
        }

        results.innerHTML = "";
        loading.style.display = "block";

        setTimeout(() => {
            loading.style.display = "none";

            results.innerHTML = `
                ${createCard("Jumia", "image/jumia.png", "https://www.jumia.com/search/?q=" + query)}
                ${createCard("Kilimall", "image/kilimal.png", "https://www.kilimall.co.ke/catalogsearch/result/?q=" + query)}
                ${createCard("AliExpress", "image/aliexpress.png", "https://rzekl.com/g/1e8d1144945e0ae67a0c16525dc3e8/?SearchText=" + query)}
                ${createCard("Amazon AE", "image/amazon.png", "https://www.amazon.ae/s?k=" + query)}
                ${createCard("eBay", "image/ebay.png", "https://www.ebay.com/sch/i.html?_nkw=" + query)}
                ${createCard("Shein", "image/shein.png.jpg", "https://www.shein.com/search?keyword=" + query)}
            `;
        }, 800);
    }

    function createCard(name, image, link) {
        return `
            <div class="card">
                <div class="logo-circle">
                    <img src="${image}" alt="${name}">
                </div>
                <h4>${name}</h4>
                <a href="${link}" target="_blank">Search</a>
            </div>
        `;
    }

    window.searchProduct = searchProduct;

    document.getElementById("searchInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const stores = [
        { name: "Jumia", image: "image/jumia.png", link: "https://www.jumia.com/search/?q=" },
        { name: "Kilimall", image: "image/kilimal.png", link: "https://www.kilimall.co.ke/catalogsearch/result/?q=" },
        { name: "AliExpress", image: "image/aliexpress.png", link: "https://rzekl.com/g/1e8d1144945e0ae67a0c16525dc3e8/?SearchText=" },
        { name: "Amazon AE", image: "image/amazon.png", link: "https://www.amazon.ae/s?k=" },
        { name: "eBay", image: "image/ebay.png", link: "https://www.ebay.com/sch/i.html?_nkw=" },
        { name: "Shein", image: "image/shein.png.jpg", link: "https://www.shein.com/search?keyword=" }
    ];

    const preview = document.getElementById("storePreview");

    // Show store logos before search
    stores.forEach(store => {
        preview.innerHTML += createCard(store.name, store.image, "#");
    });

    function searchProduct() {
        const input = document.getElementById("searchInput");
        const results = document.getElementById("results");
        const loading = document.getElementById("loading");

        const query = input.value.trim();
        if (!query) {
            alert("Please enter a product name");
            return;
        }

        results.innerHTML = "";
        loading.style.display = "block";

        setTimeout(() => {
            loading.style.display = "none";
            stores.forEach(store => {
                results.innerHTML += createCard(
                    store.name,
                    store.image,
                    store.link + encodeURIComponent(query)
                );
            });
        }, 700);
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

    document.getElementById("searchInput").addEventListener("keydown", function (e) {
        if (e.key === "Enter") searchProduct();
    });

    document.getElementById("darkToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    window.searchProduct = searchProduct;

});

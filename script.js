document.addEventListener("DOMContentLoaded", function () {

    function searchProduct() {
        let query = document.getElementById("searchInput").value.trim();

        if (query === "") {
            alert("Please enter a product name");
            return;
        }

        document.getElementById("results").innerHTML = `
            <div class="card">
                <img src="images/jumia.png" alt="Jumia Logo">
                <h4>Jumia</h4>
                <a href="#" target="_blank">Search</a>
            </div>

            <div class="card">
                <img src="images/kilimall.png" alt="Kilimall Logo">
                <h4>Kilimall</h4>
                <a href="#" target="_blank">Search</a>
            </div>

            <div class="card">
                <img src="images/aliexpress.png" alt="AliExpress Logo">
                <h4>AliExpress</h4>
                <a href="https://s.click.aliexpress.com/e/_c3R0eNaf?SearchText=${query}" target="_blank">
                    Search
                </a>
            </div>
        `;
    }

    // Button click
    window.searchProduct = searchProduct;

    // Enter key
    document.getElementById("searchInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

});

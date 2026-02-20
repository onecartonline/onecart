document.addEventListener("DOMContentLoaded", function () {

    function searchProduct() {
        let query = document.getElementById("searchInput").value.trim();

        if (query === "") {
            alert("Please enter a product name");
            return;
        }

        document.getElementById("results").innerHTML = `
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
                <a href="https://rzekl.com/g/1e8d1144945e0ae67a0c16525dc3e8/?SearchText=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search</a>
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

    // Expose function for button
    window.searchProduct = searchProduct;

    // Enter key triggers search
    document.getElementById("searchInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

});                <a href="https://www.amazon.ae/s?k=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer">Search</a>
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

    // Expose function for button
    window.searchProduct = searchProduct;

    // Enter key triggers search
    document.getElementById("searchInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

});    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

/* Card styles */
.card {
    width: 200px;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
    transition: transform 0.2s, box-shadow 0.2s;
    text-align: center;
    color: #333;
}

/* Hover effect */
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.2);
}

/* Card image */
.card img {
    width: 80px;
    margin-bottom: 10px;
    transition: transform 0.2s;
}

.card img:hover {
    transform: scale(1.1);
}

/* Card title */
.card h4 {
    margin: 10px 0 5px 0;
    font-size: 16px;
}

/* Card description */
.card p {
    font-size: 14px;
    color: #555;
}

/* Card button/link */
.card a {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 12px;
    background: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.2s, transform 0.2s;
}

.card a:hover {
    background: #1a5f9e;
    transform: scale(1.05);
}

/* Individual card background colors */
.card:nth-child(1) { background: #ffe6e6; } /* Jumia - light red */
.card:nth-child(2) { background: #e6f7ff; } /* Kilimall - light blue */
.card:nth-child(3) { background: #fff0e6; } /* AliExpress - light orange */
.card:nth-child(4) { background: #e6ffe6; } /* Amazon - light green */
.card:nth-child(5) { background: #f0e6ff; } /* eBay - light purple */
.card:nth-child(6) { background: #fff5e6; } /* Shein - light peach */

/* Footer */
footer {
    margin-top: 50px;
    padding: 20px;
    background: #2c3e50;
    color: white;
    border-radius: 15px;
    box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
}

/* Responsive tweaks */
@media (max-width: 600px) {
    .search-box input {
        width: 70%;
    }

    .card {
        width: 45%;
        margin-bottom: 20px;
    }

    .card img {
        width: 70px;
    }
        }


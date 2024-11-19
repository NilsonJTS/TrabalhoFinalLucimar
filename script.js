// Array de produtos
const products = [
    {
        name: "Anel Dourado",
        description: "Anel elegante em ouro dourado.",
        image: "https://via.placeholder.com/250x200?text=Anel+Dourado",
        link: "#",
        category: "dourados",
        details: "Este anel dourado é perfeito para ocasiões especiais. Com design exclusivo, ele destaca-se pela sua elegância e sofisticação.",
        price: "R$ 250,00"
    },
    {
        name: "Brinco Prateado",
        description: "Brinco sofisticado em prata.",
        image: "https://via.placeholder.com/250x200?text=Brinco+Prateado",
        link: "#",
        category: "prateados",
        details: "Brinco prateado com acabamento polido. Ideal para compor um look casual ou elegante.",
        price: "R$ 150,00"
    },
    {
        name: "Pulseira Dourada",
        description: "Pulseira de ouro dourado com detalhes finos.",
        image: "https://via.placeholder.com/250x200?text=Pulseira+Dourada",
        link: "#",
        category: "dourados",
        details: "Pulseira dourada com detalhes delicados. Perfeita para eventos sofisticados ou para o uso diário.",
        price: "R$ 300,00"
    },
    {
        name: "Colar Prateado",
        description: "Colar moderno em prata.",
        image: "https://via.placeholder.com/250x200?text=Colar+Prateado",
        link: "#",
        category: "prateados",
        details: "Colar de prata com design moderno. A peça é versátil e pode ser usada tanto no dia a dia quanto em ocasiões formais.",
        price: "R$ 200,00"
    },
    {
        name: "Brinco Dourado",
        description: "Brinco elegante em ouro.",
        image: "https://via.placeholder.com/250x200?text=Brinco+Dourado",
        link: "#",
        category: "dourados",
        details: "Brinco dourado com design clássico, perfeito para ocasiões especiais.",
        price: "R$ 180,00"
    },
    {
        name: "Anel Prateado",
        description: "Anel sofisticado em prata.",
        image: "https://via.placeholder.com/250x200?text=Anel+Prateado",
        link: "#",
        category: "prateados",
        details: "Anel prateado com acabamento refinado. Ideal para quem aprecia peças discretas, mas elegantes.",
        price: "R$ 220,00"
    }
];

// Selecionando elementos do DOM
const productGallery = document.getElementById('product-gallery');
const filterButtons = document.querySelectorAll('.filter-btn');

// Função para renderizar o catálogo de produtos
function renderProducts(filteredProducts) {
    productGallery.innerHTML = '';
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <a href="#" class="product-link" onclick="showProduct(${products.indexOf(product)})">
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-details">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                </div>
            </a>
        `;
        productGallery.appendChild(productItem);
    });
}

// Função para exibir os detalhes de um produto
function showProduct(productIndex) {
    const product = products[productIndex];
    document.body.innerHTML = `
        <header class="header">
            <div class="logo">Logo</div>
            <nav class="nav">
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                <div class="menu-icon" id="menu-icon">
                    <span class="material-icons">menu</span>
                </div>
            </nav>
        </header>

        <div class="product-detail">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h1>${product.name}</h1>
                <p class="product-description">${product.details}</p>
                <p><strong>Preço:</strong> ${product.price}</p>
                <button onclick="goBackToCatalog()">Voltar ao Catálogo</button>
            </div>
        </div>

        <footer class="footer">
            <div class="footer-logo">Logo</div>
            <p class="footer-text">© 2024 Todos os direitos reservados.</p>
        </footer>
    `;
}

// Função para voltar ao catálogo
function goBackToCatalog() {
    renderProducts(products);
}

// Função para filtrar produtos
function filterProducts(category) {
    if (category === 'todos') {
        renderProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        renderProducts(filtered);
    }
}

// Carregar todos os produtos inicialmente
renderProducts(products);

// Adicionar evento de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterProducts(filter);
    });
});

// Menu Hamburguer
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const icon = this.querySelector('span');

    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        icon.textContent = 'close';
    } else {
        icon.textContent = 'menu';
    }
});

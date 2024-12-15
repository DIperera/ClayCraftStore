const btn1 = document.getElementById("abc");
const btn2 = document.getElementById("efg");
const close = document.querySelector(".qq");
const menu = document.querySelector(".rr");

btn1.addEventListener("click", () => {
    const mob = document.querySelector(".mbh");
    mob.classList.add("anim");
    menu.style.display = "none";
    close.style.display = "flex";
});

btn2.addEventListener("click", () => {
    const mob = document.querySelector(".mbh");
    mob.classList.remove("anim");
    menu.style.display = "flex";
    close.style.display = "none";
});

function shopnow(){
    document.getElementById("idx").scrollIntoView({ behavior: "smooth" });
}

const products = [
    {
        name: "Decorative Pot",
        image: "images/cup1.jpg",
        rating: 4.6,
        price: "$25.99",
        description: "This decorative pot is a perfect blend of style and functionality, adding a touch of elegance to any room. Made from high-quality materials, it features intricate patterns and a smooth, glossy finish that complements a variety of décor styles. Whether used to showcase vibrant plants, flowers, or as a standalone piece, this pot serves as a charming accent to brighten up your space. Its durable design ensures long-lasting beauty, making it a wonderful addition to both modern and traditional interiors. Ideal for enhancing your home, garden, or office, this decorative pot is a must-have for any design enthusiast."
    },
    {
        name: "Clay Jug",
        image: "images/cup1.jpg",
        rating: 4.7,
        price: "$19.99",
        description: "This Clay Jug is a perfect blend of style and functionality, adding a touch of elegance to any room. Made from high-quality materials, it features intricate patterns and a smooth, glossy finish that complements a variety of décor styles. Whether used to showcase vibrant plants, flowers, or as a standalone piece, this pot serves as a charming accent to brighten up your space. Its durable design ensures long-lasting beauty, making it a wonderful addition to both modern and traditional interiors. Ideal for enhancing your home, garden, or office, this decorative pot is a must-have for any design enthusiast."

    },
    {
        name: "Clay Cup",
        image: "images/cup1.jpg",
        rating: 4.8,
        price: "$12.49",
        description: "This Clay cup is a perfect blend of style and functionality, adding a touch of elegance to any room. Made from high-quality materials, it features intricate patterns and a smooth, glossy finish that complements a variety of décor styles. Whether used to showcase vibrant plants, flowers, or as a standalone piece, this pot serves as a charming accent to brighten up your space. Its durable design ensures long-lasting beauty, making it a wonderful addition to both modern and traditional interiors. Ideal for enhancing your home, garden, or office, this decorative pot is a must-have for any design enthusiast."

    },
    {
        name: "Decorative Vase",
        image: "images/cup1.jpg",
        rating: 4.9,
        price: "$34.99",
        description: "This decorative Vas is a perfect blend of style and functionality, adding a touch of elegance to any room. Made from high-quality materials, it features intricate patterns and a smooth, glossy finish that complements a variety of décor styles. Whether used to showcase vibrant plants, flowers, or as a standalone piece, this pot serves as a charming accent to brighten up your space. Its durable design ensures long-lasting beauty, making it a wonderful addition to both modern and traditional interiors. Ideal for enhancing your home, garden, or office, this decorative pot is a must-have for any design enthusiast."

    },
    {
        name: "Clay Bowl",
        image: "images/cup1.jpg",
        rating: 2.5,
        price: "$18.75",
        description: "This Clay Bowl is a perfect blend of style and functionality, adding a touch of elegance to any room. Made from high-quality materials, it features intricate patterns and a smooth, glossy finish that complements a variety of décor styles. Whether used to showcase vibrant plants, flowers, or as a standalone piece, this pot serves as a charming accent to brighten up your space. Its durable design ensures long-lasting beauty, making it a wonderful addition to both modern and traditional interiors. Ideal for enhancing your home, garden, or office, this decorative pot is a must-have for any design enthusiast."

    },
    {
        name: "Clay Pot",
        image: "images/cup1.jpg",
        rating: 4.8,
        price: "$22.99",
        description: "This Clay pot is a perfect blend of style and functionality, adding a touch of elegance to any room. Made from high-quality materials, it features intricate patterns and a smooth, glossy finish that complements a variety of décor styles. Whether used to showcase vibrant plants, flowers, or as a standalone piece, this pot serves as a charming accent to brighten up your space. Its durable design ensures long-lasting beauty, making it a wonderful addition to both modern and traditional interiors. Ideal for enhancing your home, garden, or office, this decorative pot is a must-have for any design enthusiast."

    }
];

const productList = document.getElementById('product-list');
const overview = document.getElementById('overview'); // Overview div

products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.setAttribute('data-animate', 'fade-in'); // Add data-animate attribute

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="image">
        <div class="name">${product.name}</div>
        <div class="rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
        <div class="price">${product.price}</div>
        <button class="button" data-index="${index}" onclick="display1()">See more</button>
    `;

    productList.appendChild(productDiv);
});

function display1(){
    const overview = document.getElementById("overview");
    overview.style.display = "block";
}

// Function to update the overview section
function updateOverview(product) {
    overview.innerHTML = `
        <div class="overview-content">
            <img src="${product.image}" alt="${product.name}" class="overview-image">
            <div class="overview-details">
                <h2>${product.name}</h2>
                
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Rating:</strong> ${product.rating} ★</p>
            </div>
        </div>
        <p><strong>Description:</strong> ${product.description}</p>
        <button class="button close-overview" onclick="display2()">Back</button>
    `;

}
function display2(){
    const overview = document.getElementById("overview");
    overview.style.display = "none";
    document.getElementById("idx").scrollIntoView({ behavior: "smooth" });
}

// Add event listeners for "Add to Cart" buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productIndex = event.target.getAttribute('data-index');
        const selectedProduct = products[productIndex];
        updateOverview(selectedProduct);
        document.getElementById("idx2").scrollIntoView({ behavior: "smooth" });
        
    });
});

// Intersection Observer for animations
const animatedElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
);

animatedElements.forEach(el => observer.observe(el));

// Smooth scrolling for navigation
document.getElementById("scrollToHome").addEventListener("click", () => {
    document.getElementById("idx4").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToAbout").addEventListener("click", () => {
    document.getElementById("idx3").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToProduct").addEventListener("click", () => {
    document.getElementById("idx").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToCon").addEventListener("click", () => {
    document.getElementById("idx2").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToHome2").addEventListener("click", () => {
    document.getElementById("idx4").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToAbout2").addEventListener("click", () => {
    document.getElementById("idx3").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToProduct2").addEventListener("click", () => {
    document.getElementById("idx").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToCon2").addEventListener("click", () => {
    document.getElementById("idx2").scrollIntoView({ behavior: "smooth" });
});

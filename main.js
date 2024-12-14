const btn1 = document.getElementById("abc");
        const btn2 = document.getElementById("efg");
        const close = document.querySelector(".qq");
        const menu = document.querySelector(".rr");

        btn1.addEventListener("click", () => {
            const mob = document.querySelector(".mbh");
            mob.classList.add("anim");
            menu.style.display ="none";
            close.style.display ="flex";
        });

        btn2.addEventListener("click", () => {
            const mob = document.querySelector(".mbh");
            mob.classList.remove("anim");
            menu.style.display ="flex";
            close.style.display ="none";
        });

        const products = [
            {
                name: "Decorative Pot",
                image: "images/cup1.jpg",
                rating: 4.6,
                price: "$25.99"
            },
            {
                name: "Clay Jug",
                image: "images/cup1.jpg",
                rating: 4.7,
                price: "$19.99"
            },
            {
                name: "Clay Cup",
                image: "images/cup1.jpg",
                rating: 4.8,
                price: "$12.49"
            },
            {
                name: "Decorative Vase",
                image: "images/cup1.jpg",
                rating: 4.9,
                price: "$34.99"
            },
            {
                name: "Clay Bowl",
                image: "images/cup1.jpg",
                rating: 2.5,
                price: "$18.75"
            },
            {
                name: "Clay Pot",
                image: "images/cup1.jpg",
                rating: 4.8,
                price: "$22.99"
            }
        ];

        const productList = document.getElementById('product-list');

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.setAttribute('data-animate', 'fade-in'); // Add data-animate attribute

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="image">
                <div class="name">${product.name}</div>
                <div class="rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                <div class="price">${product.price}</div>
                <button class="button">Add to Cart</button>
            `;

            productList.appendChild(productDiv);
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
            { threshold: 0.1 } // Trigger when 20% of the element is visible
        );

        animatedElements.forEach(el => observer.observe(el));

        document.getElementById("scrollToHome").addEventListener("click", ()=>{
            document.getElementById("con1").scrollIntoView({behavior: "smooth"});
        });

        document.getElementById("scrollToAbout").addEventListener("click", ()=>{
            document.getElementById("aboutcon").scrollIntoView({behavior: "smooth"});
        });

        document.getElementById("scrollToProduct").addEventListener("click", ()=>{
            document.getElementById("container").scrollIntoView({behavior: "smooth"});
        });

        document.getElementById("scrollToCon").addEventListener("click", ()=>{
            document.getElementById("contactcon").scrollIntoView({behavior: "smooth"});
        });

        document.getElementById("scrollToHome2").addEventListener("click", ()=>{
            document.getElementById("con1").scrollIntoView({behavior: "smooth"});
        });

        document.getElementById("scrollToAbout2").addEventListener("click", ()=>{
            document.getElementById("aboutcon").scrollIntoView({behavior: "smooth"});
        });

        document.getElementById("scrollToProduct2").addEventListener("click", ()=>{
            document.getElementById("container").scrollIntoView({behavior: "smooth"});
        });

        document.getElementById("scrollToCon2").addEventListener("click", ()=>{
            document.getElementById("contactcon").scrollIntoView({behavior: "smooth"});
        });
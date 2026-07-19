'use strict';

const products = [{
    id: 1,
    name: 'Samsung 55” Crystal UHD Smart TV',
    category: 'tv',
    price: 52999,
    oldPrice: 61999,
    rating: 4.8,
    badge: '-15%',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=85',
    description: 'Vivid 4K resolution, smart streaming and a sleek bezel.'
}, {
    id: 2,
    name: 'iPhone 16 Pro 256GB',
    category: 'phones',
    price: 164900,
    oldPrice: 174900,
    rating: 4.9,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=85',
    description: 'Pro camera system, all-day battery and a beautiful display.'
}, {
    id: 3,
    name: 'HP 15s Core i5 Laptop',
    category: 'laptops',
    price: 74999,
    oldPrice: 83999,
    rating: 4.6,
    badge: '-11%',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=85',
    description: 'Fast everyday performance for work, study and creativity.'
}, {
    id: 4,
    name: 'Hisense 205L Bottom Mount Fridge',
    category: 'appliances',
    price: 58999,
    oldPrice: 67999,
    rating: 4.5,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=700&q=85',
    description: 'Spacious, energy-conscious cooling for a modern kitchen.'
}, {
    id: 5,
    name: 'JBL Flip 6 Portable Speaker',
    category: 'tv',
    price: 16499,
    oldPrice: 19999,
    rating: 4.7,
    badge: '-18%',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85',
    description: 'Bold sound, deep bass and waterproof portability.'
}, {
    id: 6,
    name: 'Redmi Note 14 Pro 5G',
    category: 'phones',
    price: 35999,
    oldPrice: 40999,
    rating: 4.5,
    badge: 'HOT',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85',
    description: 'A powerful everyday phone with a high-resolution camera.'
}, {
    id: 7,
    name: 'Canon EOS R50 Camera Kit',
    category: 'laptops',
    price: 109999,
    oldPrice: 121999,
    rating: 4.8,
    badge: '-10%',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85',
    description: 'Capture crisp photos and polished video with ease.'
}, {
    id: 8,
    name: 'Ramtons 4 Burner Cooker',
    category: 'appliances',
    price: 21999,
    oldPrice: 25999,
    rating: 4.4,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=85',
    description: 'Reliable four-burner cooking for the busy home kitchen.'
}, {
    id: 9,
    name: 'Sony WH-CH720N Headphones',
    category: 'tv',
    price: 12999,
    oldPrice: 15999,
    rating: 4.6,
    badge: '-19%',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85',
    description: 'Comfortable wireless listening with noise cancellation.'
}, {
    id: 10,
    name: 'Lenovo IdeaPad Slim 3',
    category: 'laptops',
    price: 63999,
    oldPrice: 69999,
    rating: 4.5,
    badge: 'HOT',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=85',
    description: 'Slim, dependable performance for everyday computing.'
}, {
    id: 11,
    name: 'Samsung Galaxy A56 5G',
    category: 'phones',
    price: 48999,
    oldPrice: 52999,
    rating: 4.7,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=85',
    description: 'Smooth 5G performance and a bright AMOLED display.'
}, {
    id: 12,
    name: 'Mika 7kg Front Load Washer',
    category: 'appliances',
    price: 44999,
    oldPrice: 51999,
    rating: 4.3,
    badge: '-13%',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=700&q=85',
    description: 'Effective, fabric-friendly washing with simple controls.'
}];
products.push({
    id: 13,
    name: 'Tecno Camon 30 5G',
    category: 'phones',
    price: 29999,
    oldPrice: 34999,
    rating: 4.4,
    badge: 'HOT',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=85',
    description: 'A stylish 5G smartphone with a capable camera.'
}, {
    id: 14,
    name: 'Infinix Hot 50i 128GB',
    category: 'phones',
    price: 16999,
    oldPrice: 19999,
    rating: 4.2,
    badge: '-15%',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=85',
    description: 'More storage, smooth performance and a long-lasting battery.'
}, {
    id: 15,
    name: 'Apple AirPods Pro (2nd Gen)',
    category: 'accessories',
    price: 27999,
    oldPrice: 31999,
    rating: 4.8,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=700&q=85',
    description: 'Immersive sound and active noise cancellation.'
}, {
    id: 16,
    name: 'Samsung 43” FHD Smart TV',
    category: 'tv',
    price: 34999,
    oldPrice: 39999,
    rating: 4.6,
    badge: '-13%',
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=700&q=85',
    description: 'Everyday streaming made simple on a crisp Full HD screen.'
}, {
    id: 17,
    name: 'Oraimo Power Bank 20,000mAh',
    category: 'accessories',
    price: 3299,
    oldPrice: 3999,
    rating: 4.5,
    badge: 'BEST SELLER',
    image: 'https://images.unsplash.com/photo-1609592424824-94b0b61d2032?auto=format&fit=crop&w=700&q=85',
    description: 'Portable power with multiple fast-charging ports.'
}, {
    id: 18,
    name: 'Dell Inspiron 15 Ryzen 5',
    category: 'laptops',
    price: 82999,
    oldPrice: 91999,
    rating: 4.6,
    badge: '-10%',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=700&q=85',
    description: 'Responsive performance in a practical 15-inch laptop.'
}, {
    id: 19,
    name: 'VON Hotpoint Air Fryer 5L',
    category: 'appliances',
    price: 8999,
    oldPrice: 10999,
    rating: 4.4,
    badge: 'HOT',
    image: 'https://images.unsplash.com/photo-1643005026206-14d0dc94629c?auto=format&fit=crop&w=700&q=85',
    description: 'Crisp, delicious cooking using less oil.'
}, {
    id: 20,
    name: 'LG XBoom Party Speaker',
    category: 'tv',
    price: 23999,
    oldPrice: 28999,
    rating: 4.5,
    badge: '-17%',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=85',
    description: 'Turn any gathering into a party with powerful sound.'
}, {
    id: 21,
    name: 'Logitech MK270 Wireless Combo',
    category: 'accessories',
    price: 4199,
    oldPrice: 4999,
    rating: 4.3,
    badge: 'DEAL',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85',
    description: 'Comfortable wireless keyboard and mouse set.'
}, {
    id: 22,
    name: 'Nokia C32 128GB',
    category: 'phones',
    price: 14999,
    oldPrice: 17999,
    rating: 4.1,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=85',
    description: 'A dependable smartphone built for everyday use.'
}, {
    id: 23,
    name: 'Sony 65” Bravia 4K Google TV',
    category: 'tv',
    price: 119999,
    oldPrice: 134999,
    rating: 4.9,
    badge: 'PREMIUM',
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=700&q=85',
    description: 'Cinema-quality colour and smart entertainment at home.'
}, {
    id: 24,
    name: 'Acer Aspire 3 Core i3',
    category: 'laptops',
    price: 48999,
    oldPrice: 54999,
    rating: 4.3,
    badge: '-11%',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=85',
    description: 'A versatile laptop for classes, work and browsing.'
}, {
    id: 25,
    name: 'Moulinex Blender 1.5L',
    category: 'appliances',
    price: 5299,
    oldPrice: 6499,
    rating: 4.4,
    badge: 'DEAL',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=700&q=85',
    description: 'Blend smoothies, sauces and more with confidence.'
}, {
    id: 26,
    name: 'Anker USB-C 30W Charger',
    category: 'accessories',
    price: 2499,
    oldPrice: 2999,
    rating: 4.7,
    badge: 'HOT',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=85',
    description: 'Compact, dependable fast charging for compatible devices.'
}, {
    id: 27,
    name: 'TCL 50” 4K QLED TV',
    category: 'tv',
    price: 57999,
    oldPrice: 66999,
    rating: 4.6,
    badge: '-13%',
    image: 'https://images.unsplash.com/photo-1615986200762-a1ed9610d0e2?auto=format&fit=crop&w=700&q=85',
    description: 'Rich colour, sharp detail and a streamlined smart interface.'
}, {
    id: 28,
    name: 'Philips Steam Iron',
    category: 'appliances',
    price: 3799,
    oldPrice: 4599,
    rating: 4.3,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1606928754751-4d2ec2b9b749?auto=format&fit=crop&w=700&q=85',
    description: 'Smooth out creases quickly with dependable steam power.'
}, {
    id: 29,
    name: 'Xiaomi Smart Band 9',
    category: 'accessories',
    price: 6499,
    oldPrice: 7499,
    rating: 4.5,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=700&q=85',
    description: 'Track everyday activity, sleep and health insights.'
}, {
    id: 30,
    name: 'ASUS VivoBook Go 15',
    category: 'laptops',
    price: 52999,
    oldPrice: 59999,
    rating: 4.4,
    badge: '-12%',
    image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=700&q=85',
    description: 'Lightweight productivity with an expansive display.'
});
// Generate an extensive, varied marketplace catalogue while rendering only the current page.
const catalogueSeeds = [['Samsung Galaxy A Series', 'phones', 28999, 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=85'], ['Redmi Smart Phone', 'phones', 21999, 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=85'], ['Vision Plus Smart TV', 'tv', 32999, 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=700&q=85'], ['Wireless Home Speaker', 'tv', 8999, 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=85'], ['HP Essential Laptop', 'laptops', 64999, 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=85'], ['Kitchen Appliance', 'appliances', 12999, 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=85'], ['Premium Phone Accessory', 'accessories', 3499, 'https://images.unsplash.com/photo-1609592424824-94b0b61d2032?auto=format&fit=crop&w=700&q=85']];
for (let id = 31; id <= 1050; id++) {
    const [name,category,basePrice,image] = catalogueSeeds[(id - 31) % catalogueSeeds.length];
    const multiplier = 1 + ((id * 17) % 18) / 100
      , price = Math.round(basePrice * multiplier / 100) * 100;
    products.push({
        id,
        name: `${name} ${100 + (id % 900)}`,
        category,
        price,
        oldPrice: Math.round(price * 1.16 / 100) * 100,
        rating: 4 + ((id * 7) % 10) / 10,
        badge: id % 13 === 0 ? 'FLASH DEAL' : id % 9 === 0 ? 'NEW' : 'SAVE 15%',
        image,
        description: `Genuine ${category} product with warranty and delivery options across Kenya.`
    });
}

const state = {
    category: 'all',
    query: '',
    sort: 'featured',
    price: 'all',
    minimumRating: 'all',
    visible: 9,
    cart: loadCart(),
    wishlist: load('ce-wishlist', []),
    user: load('ce-user', null)
};
const money = new Intl.NumberFormat('en-KE',{
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0
});
const $ = selector => document.querySelector(selector);
function load(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
        return fallback;
    }
}
function loadCart() {
    return load('ce-cart', []);
}
function persist() {
    localStorage.setItem('ce-cart', JSON.stringify(state.cart));
    localStorage.setItem('ce-wishlist', JSON.stringify(state.wishlist));
}
function productById(id) {
    return products.find(product => product.id === Number(id));
}
function filtered() {
    const term = state.query.trim().toLowerCase();
    const list = products.filter(p => {
        const categoryMatch = state.category === 'all' || p.category === state.category;
        const searchMatch = !term || `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(term);
        const priceMatch = state.price === 'all' || (state.price === 'under20000' && p.price < 20000) || (state.price === 'under50000' && p.price < 50000) || (state.price === 'above50000' && p.price >= 50000);
        const ratingMatch = state.minimumRating === 'all' || p.rating >= Number(state.minimumRating);
        return categoryMatch && searchMatch && priceMatch && ratingMatch;
    }
    );
    return list.sort( (a, b) => state.sort === 'low' ? a.price - b.price : state.sort === 'high' ? b.price - a.price : state.sort === 'rating' ? b.rating - a.rating : a.id - b.id);
}
function productCard(product) {
    const saved = state.wishlist.includes(product.id);
    return `<article class="product-card"><span class="badge">${product.badge}</span><button class="wish-card ${saved ? 'saved' : ''}" data-wish="${product.id}" aria-label="Save ${product.name}">${saved ? '♥' : '♡'}</button><img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy"><div class="product-info"><h3>${product.name}</h3><p>${product.description}</p><div class="rating">★ ★ ★ ★ ★ <span>${product.rating}</span></div><div class="prices"><span class="price">${money.format(product.price)}</span><span class="old-price">${money.format(product.oldPrice)}</span></div><small class="mdogo">Lipa Mdogo Mdogo: 15% deposit <b>${money.format(Math.ceil(product.price * .15 / 100) * 100)}</b></small><div class="product-actions"><button class="outline-button" data-view="${product.id}">Details</button><button class="add-button" data-add="${product.id}">Add to cart</button></div></div></article>`;
}
function renderProducts() {
    const list = filtered()
      , showing = list.slice(0, state.visible);
    $('#productGrid').innerHTML = showing.length ? showing.map(productCard).join('') : `<div class="empty"><h3>No products found</h3><p>Try another search or category.</p></div>`;
    $('#resultsText').textContent = `${list.length} product${list.length === 1 ? '' : 's'} found`;
    $('#loadMore').hidden = state.visible >= list.length || !list.length;
}
function renderCart() {
    const items = state.cart.map(item => ({
        ...item,
        product: productById(item.id)
    })).filter(item => item.product);
    const count = items.reduce( (total, item) => total + item.quantity, 0);
    $('#cartCount').textContent = count;
    $('#mobileCartCount').textContent = count;
    $('#cartItems').innerHTML = items.length ? items.map( ({product, quantity}) => `<article class="cart-item"><img src="${product.image}" alt="${product.name}"><div><h3>${product.name}</h3><p>${money.format(product.price)}</p><div class="quantity"><button data-qty="${product.id}" data-change="-1" aria-label="Decrease quantity">−</button><b>${quantity}</b><button data-qty="${product.id}" data-change="1" aria-label="Increase quantity">+</button></div></div><button class="remove" data-remove="${product.id}" aria-label="Remove ${product.name}">×</button></article>`).join('') : `<div class="empty"><h3>Your cart is empty</h3><p>Add something you love to get started.</p></div>`;
    $('#cartTotal').textContent = money.format(items.reduce( (sum, {product, quantity}) => sum + product.price * quantity, 0));
}
function renderWishlist() {
    const items = state.wishlist.map(productById).filter(Boolean);
    $('#wishlistCount').textContent = items.length;
    $('#mobileWishlistCount').textContent = items.length;
    $('#wishlistItems').innerHTML = items.length ? items.map(product => `<article class="cart-item"><img src="${product.image}" alt="${product.name}"><div><h3>${product.name}</h3><p>${money.format(product.price)}</p><button class="add-button" data-add="${product.id}">Add to cart</button></div><button class="remove" data-unwish="${product.id}" aria-label="Remove saved item">×</button></article>`).join('') : `<div class="empty"><h3>Your wishlist is empty</h3><p>Save products with the heart icon to find them quickly.</p></div>`;
}
function toggleWishlist(id) {
    state.wishlist = state.wishlist.includes(id) ? state.wishlist.filter(item => item !== id) : [...state.wishlist, id];
    persist();
    renderWishlist();
    renderProducts();
    showToast(state.wishlist.includes(id) ? 'Saved to your wishlist' : 'Removed from wishlist');
}
function addToCart(id) {
    const item = state.cart.find(item => item.id === id);
    if (item)
        item.quantity++;
    else
        state.cart.push({
            id,
            quantity: 1
        });
    persist();
    renderCart();
    showToast('Added to your cart');
}
function changeQuantity(id, amount) {
    const item = state.cart.find(item => item.id === id);
    if (!item)
        return;
    item.quantity += amount;
    if (item.quantity < 1)
        state.cart = state.cart.filter(item => item.id !== id);
    persist();
    renderCart();
}
function openDrawer(id) {
    $(`#${id}`).classList.add('open');
    $('#backdrop').classList.add('show');
}
function openCart() {
    openDrawer('cartDrawer');
}
function closeCart() {
    document.querySelectorAll('.cart-drawer').forEach(drawer => drawer.classList.remove('open'));
    $('#backdrop').classList.remove('show');
}
function viewProduct(id) {
    renderProductModal(id);
    $('#productDialog').showModal();
}
function renderProductModal(id, selectedPlan=90, selectedOption='standard') {
    const p = productById(id)
      , options = [['standard', 'Standard package', 0], ['bundle', 'Add essential bundle', Math.max(500, Math.ceil(p.price * .05 / 100) * 100)], ['protection', 'Add 12-month protection', Math.max(900, Math.ceil(p.price * .08 / 100) * 100)]]
      , option = options.find(item => item[0] === selectedOption) || options[0]
      , price = p.price + option[2]
      , deposit = Math.ceil(price * .15 / 100) * 100
      , balance = price - deposit;
    const related = products.filter(item => item.category === p.category && item.id !== p.id).slice(0, 4);
    $('#modalContent').innerHTML = `<div class="modal-top"><img src="${p.image}" alt="${p.name}"><div class="modal-info"><p class="eyebrow">${p.category.toUpperCase()} · ${p.badge}</p><h2>${p.name}</h2><div class="rating">★ ★ ★ ★ ★ <span>${p.rating} customer rating</span></div><p>${p.description}</p><div class="prices"><span class="price">${money.format(price)}</span>${option[2] ? `<span class="old-price">Base ${money.format(p.price)}</span>` : `<span class="old-price">${money.format(p.oldPrice)}</span>`}</div><div class="subproducts"><b>Choose your package</b><div>${options.map( ([key,label,extra]) => `<button class="subproduct ${key === selectedOption ? 'active' : ''}" data-option="${key}" data-product="${p.id}">${label}<small>${extra ? `+ ${money.format(extra)}` : 'Included'}</small></button>`).join('')}</div></div><div class="mdogo-modal"><b>Lipa Mdogo Mdogo — 15% deposit</b><span>Deposit today: <strong>${money.format(deposit)}</strong></span><small>Balance after deposit: ${money.format(balance)}.</small><div class="plan-options">${[30, 60, 90, 120].map(days => `<button class="plan-button ${days === selectedPlan ? 'active' : ''}" data-plan="${days}" data-product="${p.id}" data-option="${selectedOption}"><b>${days} days</b><span>${money.format(Math.ceil(balance / days / 10) * 10)}/day</span></button>`).join('')}</div><small>Daily amounts are estimates; final terms are confirmed before payment.</small></div><button class="primary-button" data-add="${p.id}" data-close="productDialog">Add to cart</button></div></div><section class="related-products"><div><p class="eyebrow">YOU MAY ALSO LIKE</p><h3>Related products</h3></div><div class="related-grid">${related.map(item => `<article><img src="${item.image}" alt="${item.name}"><div><b>${item.name}</b><span>${money.format(item.price)}</span><button data-view="${item.id}">View</button></div></article>`).join('')}</div></section>`;
}
let toastTimer;
function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout( () => toast.classList.remove('show'), 2400);
}
function updateSuggestions() {
    const box = $('#suggestions')
      , term = state.query.trim();
    if (!term) {
        box.classList.remove('show');
        box.innerHTML = '';
        return;
    }
    const matches = products.filter(p => p.name.toLowerCase().includes(term.toLowerCase())).slice(0, 5);
    box.innerHTML = matches.length ? matches.map(p => `<button class="suggestion" data-suggest="${p.id}"><img src="${p.image}" alt=""><span>${p.name}<small>${money.format(p.price)}</small></span></button>`).join('') : '<div class="suggestion">No matching products</div>';
    box.classList.add('show');
}

$('#productGrid').addEventListener('click', event => {
    const add = event.target.closest('[data-add]')
      , view = event.target.closest('[data-view]')
      , wish = event.target.closest('[data-wish]');
    if (add)
        addToCart(Number(add.dataset.add));
    if (view)
        viewProduct(Number(view.dataset.view));
    if (wish)
        toggleWishlist(Number(wish.dataset.wish));
}
);
$('#cartItems').addEventListener('click', event => {
    const qty = event.target.closest('[data-qty]')
      , remove = event.target.closest('[data-remove]');
    if (qty)
        changeQuantity(Number(qty.dataset.qty), Number(qty.dataset.change));
    if (remove) {
        state.cart = state.cart.filter(item => item.id !== Number(remove.dataset.remove));
        persist();
        renderCart();
    }
}
);
$('#wishlistItems').addEventListener('click', event => {
    const remove = event.target.closest('[data-unwish]');
    if (remove)
        toggleWishlist(Number(remove.dataset.unwish));
}
);
document.addEventListener('click', event => {
    const add = event.target.closest('[data-add]')
      , close = event.target.closest('[data-close]')
      , view = event.target.closest('[data-view]')
      , plan = event.target.closest('[data-plan]')
      , option = event.target.closest('.subproduct[data-option]');
    if (add && !add.closest('#productGrid'))
        addToCart(Number(add.dataset.add));
    if (view && !view.closest('#productGrid'))
        viewProduct(Number(view.dataset.view));
    if (plan)
        renderProductModal(Number(plan.dataset.product), Number(plan.dataset.plan), plan.dataset.option);
    if (option)
        renderProductModal(Number(option.dataset.product), 90, option.dataset.option);
    if (close) {
        const el = $(`#${close.dataset.close}`);
        el instanceof HTMLDialogElement ? el.close() : closeCart();
    }
}
);
$('#cartButton').addEventListener('click', openCart);
$('#backdrop').addEventListener('click', closeCart);
$('#wishlistButton').addEventListener('click', () => openDrawer('wishlistDrawer'));
$('#mobileCart').addEventListener('click', openCart);
$('#mobileWishlist').addEventListener('click', () => openDrawer('wishlistDrawer'));
$('#mobileAccount').addEventListener('click', () => $('#accountButton').click());
$('#searchInput').addEventListener('input', event => {
    state.query = event.target.value;
    state.visible = 8;
    renderProducts();
    updateSuggestions();
}
);
$('#suggestions').addEventListener('click', event => {
    const choice = event.target.closest('[data-suggest]');
    if (!choice)
        return;
    const p = productById(Number(choice.dataset.suggest));
    state.query = p.name;
    $('#searchInput').value = p.name;
    $('#suggestions').classList.remove('show');
    renderProducts();
}
);
$('#searchForm').addEventListener('submit', event => {
    event.preventDefault();
    $('#suggestions').classList.remove('show');
    document.querySelector('#products').scrollIntoView({
        behavior: 'smooth'
    });
}
);
document.querySelectorAll('.category').forEach(button => button.addEventListener('click', () => {
    state.category = button.dataset.category;
    state.visible = 8;
    document.querySelectorAll('.category').forEach(b => b.classList.toggle('active', b === button));
    renderProducts();
}
));
$('#sortSelect').addEventListener('change', event => {
    state.sort = event.target.value;
    renderProducts();
}
);
$('#loadMore').addEventListener('click', () => {
    state.visible += 24;
    renderProducts();
}
);
$('#priceFilter').addEventListener('change', event => {
    state.price = event.target.value;
    state.visible = 9;
    renderProducts();
}
);
$('#ratingFilter').addEventListener('change', event => {
    state.minimumRating = event.target.value;
    state.visible = 9;
    renderProducts();
}
);
$('#clearFilters').addEventListener('click', () => {
    state.price = 'all';
    state.minimumRating = 'all';
    $('#priceFilter').value = 'all';
    $('#ratingFilter').value = 'all';
    state.visible = 9;
    renderProducts();
}
);
$('#themeButton').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('ce-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}
);
$('#checkoutButton').addEventListener('click', () => {
    if (!state.cart.length) {
        showToast('Your cart is empty');
        return;
    }
    const items = state.cart.map(item => ({
        product: productById(item.id),
        quantity: item.quantity
    })).filter(item => item.product)
      , total = items.reduce( (sum, item) => sum + item.product.price * item.quantity, 0)
      , lines = items.map(item => `• ${item.product.name} ×${item.quantity} — ${money.format(item.product.price * item.quantity)}`).join('\n')
      , name = state.user?.name || 'Customer'
      , message = `Hello C-Electronics, I would like to place an order.\n\nName: ${name}\n\n${lines}\n\nTotal: ${money.format(total)}\n\nPlease confirm delivery and payment details.`;
    window.open(`https://wa.me/254788261190?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}
);
$('#accountButton').addEventListener('click', () => {
    if (state.user) {
        showToast(`Signed in as ${state.user.name}`);
        return;
    }
    $('#accountDialog').showModal();
}
);
$('#loginForm').addEventListener('submit', event => {
    event.preventDefault();
    state.user = {
        name: $('#loginName').value.trim(),
        phone: $('#loginPhone').value.trim()
    };
    localStorage.setItem('ce-user', JSON.stringify(state.user));
    $('#accountLabel').textContent = state.user.name.split(' ')[0];
    $('#accountDialog').close();
    showToast(`Welcome, ${state.user.name}!`);
}
);
if (localStorage.getItem('ce-theme') === 'dark')
    document.body.classList.add('dark');
if (state.user)
    $('#accountLabel').textContent = state.user.name.split(' ')[0];
renderProducts();
renderCart();
renderWishlist();

const dealEnd = Date.now() + 6 * 60 * 60 * 1000;
setInterval( () => {
    const seconds = Math.max(0, Math.floor((dealEnd - Date.now()) / 1000))
      , h = String(Math.floor(seconds / 3600)).padStart(2, '0')
      , m = String(Math.floor(seconds % 3600 / 60)).padStart(2, '0')
      , s = String(seconds % 60).padStart(2, '0');
    $('#dealClock').textContent = `${h} : ${m} : ${s}`;
}
, 1000);

const backToTop = $('#backToTop');
window.addEventListener('scroll', () => backToTop.classList.toggle('show', window.scrollY > 450), {
    passive: true
});
backToTop.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
}));


const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

// Mobile Menu
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuButton.querySelector(".menu-icon");
    icon.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
});

// Close after click
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuButton.querySelector(".menu-icon").textContent = "☰";
    });
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// Highlight active section
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

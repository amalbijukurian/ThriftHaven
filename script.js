// Sample data for featured items
const featuredItems = [
    {
        id: 1,
        title: 'Vintage Leather Sofa',
        price: 15999,
        condition: 'Good',
        category: 'Furniture',
        location: 'South Delhi',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        id: 2,
        title: 'MacBook Pro 2019',
        price: 65999,
        condition: 'Excellent',
        category: 'Electronics',
        location: 'Gurgaon',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        id: 3,
        title: 'Vintage Denim Jacket',
        price: 1499,
        condition: 'Good',
        category: 'Clothing',
        location: 'Noida',
        image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        title: 'Mountain Bike',
        price: 8999,
        condition: 'Fair',
        category: 'Sports',
        location: 'North Delhi',
        image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        id: 5,
        title: 'Antique Wooden Bookshelf',
        price: 6499,
        condition: 'Good',
        category: 'Furniture',
        location: 'South Delhi',
        image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80'
    },
    {
        id: 6,
        title: 'Nintendo Switch with Games',
        price: 18999,
        condition: 'Excellent',
        category: 'Electronics',
        location: 'Ghaziabad',
        image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
];

// Add more sample data for each category
const categoryItemsData = {
    clothing: [
        {
            id: 101,
            title: 'Vintage Denim Jacket',
            price: 1499,
            condition: 'Good',
            category: 'Clothing',
            location: 'Noida',
            image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 102,
            title: 'Designer Dress',
            price: 2999,
            condition: 'Excellent',
            category: 'Clothing',
            location: 'South Delhi',
            image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 103,
            title: 'Leather Boots',
            price: 1899,
            condition: 'Good',
            category: 'Clothing',
            location: 'Gurgaon',
            image: 'https://images.unsplash.com/photo-1520219306100-7da13cee9a39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ],
    furniture: [
        {
            id: 201,
            title: 'Vintage Leather Sofa',
            price: 15999,
            condition: 'Good',
            category: 'Furniture',
            location: 'South Delhi',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 202,
            title: 'Wooden Coffee Table',
            price: 4999,
            condition: 'Excellent',
            category: 'Furniture',
            location: 'North Delhi',
            image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 203,
            title: 'Antique Wooden Bookshelf',
            price: 6499,
            condition: 'Good',
            category: 'Furniture',
            location: 'South Delhi',
            image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80'
        }
    ],
    electronics: [
        {
            id: 301,
            title: 'MacBook Pro 2019',
            price: 65999,
            condition: 'Excellent',
            category: 'Electronics',
            location: 'Gurgaon',
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 302,
            title: 'Wireless Headphones',
            price: 3499,
            condition: 'Like New',
            category: 'Electronics',
            location: 'Noida',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 303,
            title: 'Nintendo Switch with Games',
            price: 18999,
            condition: 'Excellent',
            category: 'Electronics',
            location: 'Ghaziabad',
            image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
    ],
    books: [
        {
            id: 401,
            title: 'Classic Literature Collection',
            price: 1299,
            condition: 'Good',
            category: 'Books',
            location: 'South Delhi',
            image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 402,
            title: 'Science Fiction Novels',
            price: 999,
            condition: 'Fair',
            category: 'Books',
            location: 'Gurgaon',
            image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ],
    sports: [
        {
            id: 501,
            title: 'Mountain Bike',
            price: 8999,
            condition: 'Fair',
            category: 'Sports',
            location: 'North Delhi',
            image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 502,
            title: 'Tennis Racket Set',
            price: 1499,
            condition: 'Good',
            category: 'Sports',
            location: 'Noida',
            image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ],
    toys: [
        {
            id: 601,
            title: 'LEGO Star Wars Set',
            price: 2499,
            condition: 'Excellent',
            category: 'Toys & Games',
            location: 'Ghaziabad',
            image: 'https://images.unsplash.com/photo-1560167016-022b78a0258e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 602,
            title: 'Board Game Collection',
            price: 1299,
            condition: 'Good',
            category: 'Toys & Games',
            location: 'South Delhi',
            image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ]
};

// DOM Elements
const featuredGrid = document.getElementById('featured-items');
const searchBtn = document.getElementById('search-btn');
const closeSearchBtn = document.getElementById('close-search');
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const listingModal = document.getElementById('listing-modal');
const openListingFormBtn = document.getElementById('open-listing-form');
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');
const closeModalBtns = document.querySelectorAll('.close-modal');
const prevTestimonialBtn = document.getElementById('prev-testimonial');
const nextTestimonialBtn = document.getElementById('next-testimonial');
const testimonials = document.querySelectorAll('.testimonial');

// Additional DOM Elements
const categoryCards = document.querySelectorAll('.category-card');
const categoryContent = document.getElementById('category-content');
const categoryTitle = document.getElementById('category-title');
const categoryDescription = document.getElementById('category-description');
const categoryItemsContainer = document.getElementById('category-items');

// Current testimonial index
let currentTestimonial = 0;

// Add to the existing DOM Elements section
const browseItemsBtn = document.getElementById('browse-items-btn');
const sellItemsBtn = document.getElementById('sell-items-btn');

// Initialize the website
function init() {
    loadFeaturedItems();
    setupEventListeners();
    updateHeaderBasedOnLoginStatus();
}

// Function to format price in Indian Rupees
function formatIndianRupees(price) {
    // Convert to Indian format (e.g., ₹1,23,456)
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    return formatter.format(price);
}

// Load featured items into the grid
function loadFeaturedItems() {
    featuredGrid.innerHTML = '';
    
    featuredItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        
        itemCard.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="item-details">
                <h3 class="item-title">${item.title}</h3>
                <div class="item-price">${formatIndianRupees(item.price)}</div>
                <div class="item-meta">
                    <span>${item.condition}</span>
                    <span>${item.category}</span>
                    <span>${item.location}</span>
                </div>
                <div class="item-buttons">
                    <button class="btn primary view-details" data-id="${item.id}">View Details</button>
                    <button class="btn secondary contact-seller" data-id="${item.id}">Contact</button>
                </div>
            </div>
        `;
        
        featuredGrid.appendChild(itemCard);
    });
    
    // Add event listeners to the newly created buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', handleViewDetails);
    });
    
    document.querySelectorAll('.contact-seller').forEach(btn => {
        btn.addEventListener('click', handleContactSeller);
    });
}

// Set up all event listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', toggleSearchOverlay);
    closeSearchBtn.addEventListener('click', toggleSearchOverlay);
    searchInput.addEventListener('keyup', handleSearch);
    
    // Modal functionality
    loginBtn.addEventListener('click', () => toggleModal(loginModal));
    openListingFormBtn.addEventListener('click', () => toggleModal(listingModal));
    showRegisterLink.addEventListener('click', switchToRegister);
    showLoginLink.addEventListener('click', switchToLogin);
    
    // Close modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeAllModals();
        }
    });
    
    // Form submissions
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    document.getElementById('listing-form').addEventListener('submit', handleNewListing);
    document.getElementById('newsletter-form').addEventListener('submit', handleNewsletterSignup);
    
    // Testimonial slider
    prevTestimonialBtn.addEventListener('click', showPreviousTestimonial);
    nextTestimonialBtn.addEventListener('click', showNextTestimonial);
    
    // Initialize testimonial display
    showTestimonial(currentTestimonial);
    
    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
    
    // Set active nav link based on current section
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Add event listeners to category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', handleCategoryClick);
    });

    // Hero section buttons
    browseItemsBtn.addEventListener('click', handleBrowseItems);
    sellItemsBtn.addEventListener('click', handleSellItems);
}

// Toggle search overlay
function toggleSearchOverlay() {
    searchOverlay.classList.toggle('active');
    if (searchOverlay.classList.contains('active')) {
        searchInput.focus();
    }
}

// Handle search input
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    // In a real application, this would query the server
    // For demo purposes, we'll just filter the featured items
    if (searchTerm.length > 2) {
        const filteredItems = featuredItems.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.category.toLowerCase().includes(searchTerm)
        );
        
        // Display search results (in a real app, this would update the page)
        console.log('Search results:', filteredItems);
    }
}

// Toggle modal visibility
function toggleModal(modal) {
    closeAllModals();
    modal.classList.add('active');
}

// Close all modals
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Switch from login to register modal
function switchToRegister(e) {
    e.preventDefault();
    loginModal.classList.remove('active');
    registerModal.classList.add('active');
}

// Switch from register to login modal
function switchToLogin(e) {
    e.preventDefault();
    registerModal.classList.remove('active');
    loginModal.classList.add('active');
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // In a real application, this would validate with a server
    // For demo purposes, we'll just accept any input
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    // Show success message
    alert('Login successful!');
    
    // Close the modal
    closeAllModals();
    
    // If there was a pending action (like selling an item), handle it
    const pendingAction = localStorage.getItem('pendingAction');
    if (pendingAction === 'sell') {
        localStorage.removeItem('pendingAction');
        toggleModal(listingModal);
    }
}

// Handle register form submission
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    
    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // In a real application, this would send data to a server
    console.log('Registration:', { name, email, password });
    
    // Show success message
    alert('Registration successful! (Demo only)');
    closeAllModals();
}

// Handle new listing form submission
function handleNewListing(e) {
    e.preventDefault();
    const title = document.getElementById('item-title').value;
    const category = document.getElementById('item-category').value;
    const price = document.getElementById('item-price').value;
    const condition = document.getElementById('item-condition').value;
    const description = document.getElementById('item-description').value;
    const image = document.getElementById('item-image').value;
    const contact = document.getElementById('seller-contact').value;
    
    // In a real application, this would send data to a server
    console.log('New listing:', { 
        title, category, price, condition, description, image, contact 
    });
    
    // Show success message
    alert('Listing created successfully! (Demo only)');
    closeAllModals();
    
    // Reset form
    document.getElementById('listing-form').reset();
}

// Handle newsletter signup
function handleNewsletterSignup(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // In a real application, this would send data to a server
    console.log('Newsletter signup:', email);
    
    // Show success message
    alert('Thank you for subscribing to our newsletter! (Demo only)');
    
    // Reset form
    e.target.reset();
}

// Handle view details button click
function handleViewDetails(e) {
    const itemId = e.target.getAttribute('data-id');
    const item = findItemById(parseInt(itemId));
    
    if (!item) return;
    
    // In a real application, this would navigate to a details page
    console.log('View details for item:', item);
    
    // For demo, show an alert with item details
    alert(`
        ${item.title}
        Price: ${formatIndianRupees(item.price)}
        Condition: ${item.condition}
        Category: ${item.category}
        Location: ${item.location}
        
        This is a demo. In a real application, this would show a detailed page.
    `);
}

// Handle contact seller button click
function handleContactSeller(e) {
    const itemId = e.target.getAttribute('data-id');
    const item = findItemById(parseInt(itemId));
    
    if (!item) return;
    
    // In a real application, this would open a messaging interface
    console.log('Contact seller for item:', item);
    
    // For demo, show an alert
    alert(`
        Contact seller for: ${item.title}
        
        This is a demo. In a real application, this would open a messaging interface.
    `);
}

// Show testimonial at the given index
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Show the next testimonial
function showNextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Show the previous testimonial
function showPreviousTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Handle navigation link click
function handleNavLinkClick(e) {
    // Remove active class from all links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    e.target.classList.add('active');
}

// Highlight navigation based on scroll position
function highlightNavOnScroll() {
    // Get current scroll position
    const scrollPosition = window.scrollY;
    
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll('section[id]');
    
    // Loop through sections to find the one in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for better UX
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to corresponding nav link
            const correspondingLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
    
    // Handle case when at the top of the page (home)
    if (scrollPosition < 100) {
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });
        const homeLink = document.querySelector('nav ul li a[href="#"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
}

// Helper function to find an item by ID across all collections
function findItemById(id) {
    // Check featured items
    const featuredItem = featuredItems.find(item => item.id === id);
    if (featuredItem) return featuredItem;
    
    // Check category items
    for (const category in categoryItemsData) {
        const categoryItem = categoryItemsData[category].find(item => item.id === id);
        if (categoryItem) return categoryItem;
    }
    
    return null;
}

// Handle category card click
function handleCategoryClick(e) {
    // Find the clicked category card
    const card = e.currentTarget;
    const category = card.getAttribute('data-category');
    
    // Remove active class from all category cards
    categoryCards.forEach(c => c.classList.remove('active'));
    
    // Add active class to clicked card
    card.classList.add('active');
    
    // Show the category content section
    categoryContent.classList.add('active');
    
    // Scroll to the category content section
    categoryContent.scrollIntoView({ behavior: 'smooth' });
    
    // Update the category title and description
    const categoryName = card.querySelector('h3').textContent;
    categoryTitle.textContent = categoryName;
    categoryDescription.textContent = `Browse our selection of pre-loved ${categoryName.toLowerCase()}`;
    
    // Load items for the selected category
    loadCategoryItems(category);
}

// Load items for a specific category
function loadCategoryItems(category) {
    // Clear previous items
    categoryItemsContainer.innerHTML = '';
    
    // Get items for the selected category
    const items = categoryItemsData[category] || [];
    
    if (items.length === 0) {
        // Display a message if no items are available
        categoryItemsContainer.innerHTML = `
            <div class="no-items-message">
                <h3>No items available</h3>
                <p>Check back soon for items in this category!</p>
            </div>
        `;
        return;
    }
    
    // Add items to the grid
    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        
        itemCard.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="item-details">
                <h3 class="item-title">${item.title}</h3>
                <div class="item-price">${formatIndianRupees(item.price)}</div>
                <div class="item-meta">
                    <span>${item.condition}</span>
                    <span>${item.category}</span>
                    <span>${item.location}</span>
                </div>
                <div class="item-buttons">
                    <button class="btn primary view-details" data-id="${item.id}">View Details</button>
                    <button class="btn secondary contact-seller" data-id="${item.id}">Contact</button>
                </div>
            </div>
        `;
        
        categoryItemsContainer.appendChild(itemCard);
    });
    
    // Add event listeners to the newly created buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', handleViewDetails);
    });
    
    document.querySelectorAll('.contact-seller').forEach(btn => {
        btn.addEventListener('click', handleContactSeller);
    });
}

// Handle browse items button click
function handleBrowseItems() {
    // Scroll to categories section with smooth animation
    const categoriesSection = document.getElementById('categories');
    
    // First, show all categories
    showAllCategories();
    
    // Then scroll to the categories section
    categoriesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function handleSellItems() {
    // Check if user is logged in (demo)
    const isLoggedIn = checkLoginStatus(); // This is a demo function

    if (!isLoggedIn) {
        // Show login modal with a message
        showLoginPrompt('Please log in to create a listing');
    } else {
        // Open the listing form modal
        toggleModal(listingModal);
    }
}

// Add these helper functions
function checkLoginStatus() {
    // In a real application, this would check with the backend
    // For demo, we'll use localStorage to simulate login state
    return localStorage.getItem('isLoggedIn') === 'true';
}

function showLoginPrompt(message) {
    // Add a message to the login modal
    const loginMessage = document.createElement('div');
    loginMessage.classList.add('login-message');
    loginMessage.textContent = message;
    
    // Remove any existing message
    const existingMessage = loginModal.querySelector('.login-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Add the new message at the top of the form
    const loginForm = loginModal.querySelector('form');
    loginForm.insertBefore(loginMessage, loginForm.firstChild);
    
    // Show the login modal
    toggleModal(loginModal);
}

function showAllCategories() {
    // Remove active class from any selected category
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Hide the category content section if it's visible
    const categoryContent = document.getElementById('category-content');
    categoryContent.classList.remove('active');
}

// Update the logout functionality
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    alert('Logged out successfully!');
    
    // Refresh the page or update UI as needed
    location.reload();
}

// Add a logout button to the header if not already present
function updateHeaderBasedOnLoginStatus() {
    const navButtons = document.querySelector('.nav-buttons');
    const loginBtn = document.getElementById('login-btn');
    
    if (checkLoginStatus()) {
        // Change login button to show user email and add logout option
        loginBtn.textContent = localStorage.getItem('userEmail');
        
        // Add logout button if it doesn't exist
        if (!document.getElementById('logout-btn')) {
            const logoutBtn = document.createElement('button');
            logoutBtn.id = 'logout-btn';
            logoutBtn.textContent = 'Logout';
            logoutBtn.addEventListener('click', handleLogout);
            navButtons.appendChild(logoutBtn);
        }
    } else {
        // Restore login button
        loginBtn.textContent = 'Login';
        
        // Remove logout button if it exists
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.remove();
        }
    }
}

// Initialize the website when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init); 
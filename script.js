// JavaScript để quản lý các sản phẩm và tương tác của người dùng

// Danh sách sản phẩm
const products = [
    { id: 1, name: "Heo Đan Len", price: 250000, description: "Heo đan len dễ thương." },
    { id: 2, name: "Móc Khóa Cô Gái", price: 100000, description: "Móc khóa xinh xắn." },
    { id: 3, name: "Bò Đan Len", price: 300000, description: "Bò đan len lớn." },
    { id: 4, name: "Vịt Đan Len", price: 200000, description: "Vịt đan len dễ thương." },
    { id: 5, name: "Gà Đan Len", price: 180000, description: "Gà đan len đáng yêu." },
    { id: 6, name: "Khăn Đan Len", price: 150000, description: "Khăn đan len ấm áp." },
    { id: 7, name: "Thỏ Đan Len", price: 220000, description: "Thỏ đan len dễ thương." }
];

// Hàm để hiển thị sản phẩm trên trang
function displayProducts() {
    const productsContainer = document.querySelector('.products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
            <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Giỏ hàng
const cart = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} đã được thêm vào giỏ hàng!`);
    }
}

// Hiển thị sản phẩm khi trang tải
window.onload = displayProducts;
const products = [
    { id: 1, name: "Heo Đan Len", price: 250000, description: "Heo đan len dễ thương." },
    { id: 2, name: "Móc Khóa Cô Gái", price: 100000, description: "Móc khóa xinh xắn." },
    { id: 3, name: "Bò Đan Len", price: 300000, description: "Bò đan len lớn." },
    { id: 4, name: "Vịt Đan Len", price: 200000, description: "Vịt đan len dễ thương." },
    { id: 5, name: "Gà Đan Len", price: 180000, description: "Gà đan len đáng yêu." },
];

function displayMessage(message, sender) {
    const messagesDiv = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Cuộn xuống cuối
}

function getBotResponse(input) {
    input = input.toLowerCase();
    
    if (input.includes('xin chào')) {
        return 'Xin chào! Bạn cần giúp gì?';
    } else if (input.includes('giá') && input.includes('heo')) {
        return `Giá heo đan len là ${products[0].price.toLocaleString()} VNĐ. ${products[0].description}`;
    } else if (input.includes('giá') && input.includes('móc khóa')) {
        return `Giá móc khóa cô gái là ${products[1].price.toLocaleString()} VNĐ. ${products[1].description}`;
    } else if (input.includes('giá') && input.includes('bò')) {
        return `Giá bò đan len là ${products[2].price.toLocaleString()} VNĐ. ${products[2].description}`;
    } else if (input.includes('giá') && input.includes('vịt')) {
        return `Giá vịt đan len là ${products[3].price.toLocaleString()} VNĐ. ${products[3].description}`;
    } else if (input.includes('giá') && input.includes('gà')) {
        return `Giá gà đan len là ${products[4].price.toLocaleString()} VNĐ. ${products[4].description}`;
    } else {
        return 'Xin lỗi, tôi không hiểu câu hỏi của bạn.';
    }
}

document.getElementById('button-send').onclick = function() {
    const userInput = document.getElementById('input-message').value;
    if (userInput) {
        displayMessage(userInput, 'user');
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, 'bot');
        document.getElementById('input-message').value = ''; // Xóa ô nhập
    }
};

document.getElementById('input-message').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('button-send').click();
    }
});
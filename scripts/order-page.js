import { orders } from './orders.js';
import { getProduct } from './products.js'; // assuming you have this to get product details

const ordersGrid = document.querySelector('.orders-grid');
ordersGrid.innerHTML = ''; // clear hardcoded content

orders.forEach((order) => {
  const orderHtml = `
    <div class="order-container">
      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${order.orderDate}</div>
          </div>
          <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>$${order.total}</div>
          </div>
        </div>
        <div class="order-header-right-section">
          <div class="order-header-label">Order ID:</div>
          <div>${order.id}</div>
        </div>
      </div>
      <div class="order-details-grid">
        ${order.items.map(item => {
          const product = getProduct(item.productId);
          return `
            <div class="product-image-container">
              <img src="${product.image}">
            </div>
            <div class="product-details">
              <div class="product-name">${product.name}</div>
              <div class="product-delivery-date">Arriving on: ${item.deliveryDate}</div>
              <div class="product-quantity">Quantity: ${item.quantity}</div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>
            <div class="product-actions">
              <a href="tracking.html?orderId=${order.id}&productId=${item.productId}">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  ordersGrid.insertAdjacentHTML('beforeend', orderHtml);
});

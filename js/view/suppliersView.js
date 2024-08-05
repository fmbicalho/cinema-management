function render(suppliers) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Removes the previous elements
    const list = document.createElement('div');
    list.style = `
        display: flex; 
        flex-wrap: wrap; 
        gap: 20px; 
        margin-top: 5%; 
        justify-content: center;
    `;
    list.className = `text-center`;

    const orderSummaryCard = document.createElement('div');
    orderSummaryCard.className = `card text-white mb-3`;
    orderSummaryCard.style = `
    width: 70%; 
    margin: 20px auto; 
    background-color: rgb(28, 28, 28);
`;

    orderSummaryCard.innerHTML = `
    <div class="card-header text-center">Order Summary</div>
    <div class="card-body" id="order-summary-body">
        <p class="card-text text-center">Orders will appear here...</p>
    </div>
    <div class="card-footer text-center">
        <p id="total-cost" style="margin: 0;">Total: $0.00</p>
        <button id="order-button" style="margin-top: 10px;">Place Order</button>
    </div>`;

    suppliers.forEach(({ id, name, description, value }) => {
        const item = document.createElement('div');
        item.className = `card text-white mb-3`;
        item.style = `
            flex: 1 1 calc(20% - 20px); 
            max-width: calc(20% - 20px); 
            background-color: rgb(38, 38, 38);
            transition: transform 0.3s, box-shadow 0.3s;
        `;
        item.innerHTML = `
            <div class="card-header">${name}</div>
            <div class="card-body">
                <h5 class="card-title">${description}</h5>
                <p class="card-text">Price: $${value.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button class="decrease">-</button>
                    <input type="number" value="1" min="1" style="width: 50px; text-align: center;">
                    <button class="increase">+</button>
                </div>
                <button class="add-order" style="margin-top: 10px;">Add Order</button>
            </div>`;
        list.appendChild(item);

        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.6)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
        });

        const decreaseButton = item.querySelector('.decrease');
        const increaseButton = item.querySelector('.increase');
        const quantityInput = item.querySelector('input[type="number"]');
        const addOrderButton = item.querySelector('.add-order');

        decreaseButton.addEventListener('click', () => {
            if (quantityInput.value > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });

        increaseButton.addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });

        addOrderButton.addEventListener('click', () => {
            const orderSummaryBody = document.getElementById('order-summary-body');
            const totalCostElement = document.getElementById('total-cost');

            if (orderSummaryBody.querySelector('p')) {
                orderSummaryBody.innerHTML = '';
            }

            const order = document.createElement('div');
            order.className = 'order';
            order.style = `
                padding: 5px 0; 
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            `;
            const orderCost = (value * quantityInput.value).toFixed(2);
            order.textContent = `Supplier: ${name} - Quantity: ${quantityInput.value} - Price: $${orderCost}`;
            orderSummaryBody.appendChild(order);

            
            const currentTotal = parseFloat(totalCostElement.textContent.replace('Total: $', ''));
            const newTotal = currentTotal + parseFloat(orderCost);
            totalCostElement.textContent = `Total: $${newTotal.toFixed(2)}`;
        });
    });

    
    const orderButton = orderSummaryCard.querySelector('#order-button');
    orderButton.addEventListener('click', () => {
        const orderSummaryBody = document.getElementById('order-summary-body');
        orderSummaryBody.innerHTML = '<p class="card-text">Your orders will appear here...</p>';
        const totalCostElement = document.getElementById('total-cost');
        totalCostElement.textContent = 'Total: $0.00';
        window.alert("Order has been placed!");
    });

    container.appendChild(list);
    container.appendChild(orderSummaryCard);
}

export default { render };

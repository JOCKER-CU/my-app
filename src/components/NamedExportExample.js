import React from 'react';

// Named Exports Example
// You can have MULTIPLE named exports per file
// When importing, you MUST use the exact same name (or use 'as' to rename)

// Named export #1
export function ProductCard({ name, price, inStock }) {
    return (
        <div style={{
            padding: '15px',
            backgroundColor: '#fff3e0',
            borderRadius: '8px',
            marginBottom: '10px',
            border: '2px solid #ff9800'
        }}>
            <h4>Product: {name}</h4>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Status:</strong> {inStock ? '✓ In Stock' : '✗ Out of Stock'}</p>
        </div>
    );
}

// Named export #2
export function ProductList({ products }) {
    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px'
        }}>
            <h3>Product List (Named Exports)</h3>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    price={product.price}
                    inStock={product.inStock}
                />
            ))}
        </div>
    );
}

// Named export #3 - a utility function
export const calculateTotal = (products) => {
    return products.reduce((total, product) => total + product.price, 0);
};

// Named export #4 - a constant
export const TAX_RATE = 0.08;

// Alternative syntax for named exports:
// function ProductCard() { ... }
// function ProductList() { ... }
// export { ProductCard, ProductList };


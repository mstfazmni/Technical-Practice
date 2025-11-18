import { useState, useEffect } from 'react';
import products from '../data/data';

export function SearchFilter () {
    const [searchItem, setSearchItem] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    return (
        <div>
            <div className='products-div'>
                <h3>All Products</h3>
                <ul>
                    {filteredProducts.map((product, index) => (
                        <li key={index}>
                            {product.title} - ${product.price} -{" "}
                            <strong>{product.inStock ? "Yes" : "None"}</strong>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='filteredProducts-div'>

            </div>
           
        </div>
    );
} 
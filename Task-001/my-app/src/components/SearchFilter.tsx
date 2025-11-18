import { useState, useEffect } from 'react';
import products from '../data/data';

export function SearchFilter () {
    const [searchItem, setSearchItem] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const result = products.filter(product => 
            product.title.toLowerCase().includes(searchItem.toLowerCase())
        );
        setFilteredProducts(result)
    }, [searchItem]);

    return (
        <div>
            <div className='products-div'>
                <h3 className='d-flex flex-column justify-content-center text-bg-success'>All Products</h3>
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>
                            {product.title} - ${product.price} -{" "}
                            <strong>{product.inStock ? "Yes" : "None"}</strong>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='filteredProducts-div'>
                <h3 className='d-flex flex-column justify-content-center text-bg-danger'>Filtered Products</h3>
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
                <h3 className='d-flex flex-column justify-content-center text-bg-primary'>Search Bar</h3>
                <input 
                    type='text'
                    placeholder="Search products by title"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                />

            </div>
           
        </div>
    );
} 
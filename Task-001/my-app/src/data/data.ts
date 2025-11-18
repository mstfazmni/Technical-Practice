// Define the Product type
type Product = {
    title: string,
    price: number,
    inStock: boolean   
}

// Create an array of products
const products: Product[] = [
    { title: "Laptop", price: 1200, inStock: true },
    { title: "Headphones", price: 150, inStock: false },
    { title: "Keyboard", price: 80, inStock: true },
    { title: "Mouse", price: 10, inStock: false },
    { title: "Notebook", price: 20, inStock: true },
    { title: "Speaker", price: 40, inStock: false }
]

export default products;
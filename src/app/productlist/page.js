"use client"
import Script from 'next/script'
import React from 'react'

const page = () => {
    return (
        <div>
            <Script
                src='/location.js'
                onLoad={() => console.log("File Loaded Successfully.")} />
        </div>
    )
}

export default page






// Data Fetching using Server side component

// async function productList() {
//     let data = await fetch("https://dummyjson.com/products");
//     data = await data.json();
//     return data.products
// }

// export default async function Page() {
//     let products = await productList();
//     console.log(products);
//     return (
//         <div>
//             <h1>Product List</h1>
//             {
//                 products.map((item) => (
//                     <div><h3>Name: {item.title}</h3></div>
//                 ))
//             }
//         </div>
//     )
// }

// export function generateMetadata({ params }) {
//     return {
//         title: "Product Page",
//     }
// };








// Data Fetching using client side component


// "use client"
// import React, { useEffect, useState } from 'react'

// const Products = () => {

//     const [product, setProduct] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://dummyjson.com/products");
//                 const data = await response.json();
//                 console.log(data);
//                 setProduct(data.products);
//             } catch (error) {
//                 console.error("Error", error);
//             }
//         }
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Products List Shown Below</h1>
//             <div className='container'>{
//                 product.map((item, index) => (
//                     <div className='main-div' key={index}>
//                         <h1>{item.title}</h1>
//                         <h3>Brand: {item.brand}</h3>
//                         <h3>Price : {item.price} $</h3>
//                         <p>{item.description}</p>
//                     </div>
//                 ))
//             }
//             </div>
//         </div>
//     )
// }

// export default Products

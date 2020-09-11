// import React, { Component } from 'react';
// import './Product.css'

// class Product extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const prods=this.props.products;
//         console.log(prods)
//         return (
//             // <div>
//             //     <div className = "Content">
//             //         <div class="dropdown">
//             //             <button class="dropbtn">Order</button>
//             //             <div class="dropdown-content">
//             //                 <a href="/">Latest</a>
//             //                 <a href="/">Previous</a>
//             //             </div> 
//             //         </div>
//             //         <label for = "filters">Filter </label>
//             //         <select id = "filter">
//             //             <option value = "all">ALL</option>
//             //             <option value = "some">SOME</option>
//             //         </select> 
//             // </div>
//             <div>   
//                 <ul className="products">
//                     {this.props.products.map((product)=>(
//                         <li key={product.id}>
//                         <div className="image-div">
//                             <a href="#">
//                                 <img src={require(`./Images/${product.image}`)} 
//                                      alt={product.title}></img>
//                                 <p>{product.title}</p>
//                             </a>
//                             <div className = "des">
//                                 <p>${product.price}</p>
//                                 {/* <div> */}
//                                     <button type="button">Add To Cart</button>
//                                 {/* </div> */}
//                             </div>
//                         </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             // </div>
//         );
//     }
// }

// export default Product;








import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const prods=this.props.products;
        return (
            <div>
                <ul className="products">
                    {this.props.products.map((product)=>(
                        <li key={product.id}>
                            <div>
                            <a href="#">
                                <img src={require(`./Images/${product.image}`)} alt={product.title}></img>
                                <p>{product.title}</p>
                                <div className="price">
                                    <p>Amount:{product.price}</p>
                                    <button>ADD to Cart</button>
                                </div>
                            </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Product;

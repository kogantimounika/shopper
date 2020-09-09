// import React, { Component } from 'react';
// export default class Product extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
              

//             </div>
//         )
//     }
// }


import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const prods=this.props.products;
        return (
            <div>
                <ul>
                    {this.props.products.map((product)=>(
                        <li key={product.id}>
                            <div>
                            <a href="#">
                                <img src={require(`./Images/${product.image}`)} 
                                     alt={product.title}></img>
                                <p>{product.title}</p>
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

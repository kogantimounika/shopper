// import React, { Component } from 'react';
// import './Filter.css';

// export default class Filter extends Component {
//     render() {
//         return (
//             <div className="content">
//                 <div className="item1">Products: 6</div>
//                 <div className = "item4">
//                 ORDER<select className="item2" value="order">
//                     <option value="lates">latees</option>
//                     <option value="old">OLD</option>
//                 </select>
//                 </div>
//                 <div>

//                 FILTER<select className="item3" value="order">
//                     <option value="lates">latees</option>
//                     <option value="old">OLD</option>
//                 </select>
//                 </div>

                


//                {/* <div className = "Content">
//                     <div class="dropdown">
//                         <button class="dropbtn">Order</button>
//                         <div class="dropdown-content">
//                             <a href="/">Latest</a>
//                             <a href="/">Previous</a>
//                         </div> 
//                     </div>
//                     <label for = "filters">Filter </label>
//                     <select id = "filter">
//                         <option value = "all">ALL</option>
//                         <option value = "some">SOME</option>
//                     </select> 
//             </div>  */}
//             </div>
//         )
//     }
// }






import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                    {" "}
                    Order  <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter <select value={this.props.size} onChange={this.props.filterProducts} >
                        <option value="">ALL</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Filter;
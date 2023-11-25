import React  from 'react';
const Menu = props => {
    return (
        <>
            {/* <h1 className='ms-5 mt-2 border-bottom border-danger border-2 '> Menu </h1> */}
            <table className="table table-striped table-hover  mt-3" style={{width: "1800px", marginLeft: "50px"}}>
                <thead>
                    <tr>
                        <th scope="col" colSpan={4} className='fs-5'>Menu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">#</th>
                        <td>Name</td>
                        <td>Price</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Burger</td>
                        <td>30</td>
                        <td><i class="fa-solid fa-cart-plus"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Fries</td>
                        <td>20</td>
                        <td><i class="fa-solid fa-cart-plus"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Pizza</td>
                        <td>45</td>
                        <td><i class="fa-solid fa-cart-plus"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Chicken Grilled </td>
                        <td>40</td>
                        <td><i class="fa-solid fa-cart-plus"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>BBQ Salad </td>
                        <td>8</td>
                        <td><i class="fa-solid fa-cart-plus"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Molten Cake</td>
                        <td>15</td>
                        <td><i class="fa-solid fa-cart-plus"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Lemonade juice</td>
                        <td>17</td>
                        <td><i class="fa-solid fa-cart-plus"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Cola</td>
                        <td>10</td>
                        <td><i class="fa-solid fa-cart-plus"></i></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default Menu;


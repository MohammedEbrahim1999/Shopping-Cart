import React from 'react';
import { useState } from 'react';
const ShoppingCart = () => {
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [price3, setPrice3] = useState(0);
    const [price4, setPrice4] = useState(0);
    const [price5, setPrice5] = useState(0);
    const [price6, setPrice6] = useState(0);
    const [price7, setPrice7] = useState(0);
    const [price8, setPrice8] = useState(0);
    const [count1, setCount1] = useState(0);
    const incrementCount1 = () => {
        setCount1(count1 + 1);
        setPrice1( price1 + 30);
    }
    const decrementCount1 = () => {
        setCount1(count1 - 1)
        setPrice1(price1 - 30)
    }
    const [count2, setCount2] = useState(0);
    const incrementCount2 = () => {
        setCount2(count2 + 1);
        setPrice2(price2 + 20);
    }
    const decrementCount2 = () => {
        setCount2(count2 - 1)
        setPrice2(price2 - 20);

    }
    const [count3, setCount3] = useState(0);
    const incrementCount3 = () => {
        setCount3(count3 + 1);
        setPrice3(price3 + 45)
    }
    const decrementCount3 = () => {
        setCount3(count3 - 1)
        setPrice3(price3 - 45)
    }
    const [count4, setCount4] = useState(0);
    const incrementCount4 = () => {
        setCount4(count4 + 1);
        setPrice4(price4 + 40);
    }
    const decrementCount4 = () => {
        setCount4(count4 -1)
        setPrice4(price4 - 40);
    }
    const [count5, setCount5] = useState(0);
    const incrementCount5 = () => {
        setCount5(count5 + 1);
        setPrice5(price5 + 8);
    }
    const decrementCount5 = () => {
        setCount5(count5 -1)
        setPrice5(price5 - 8);
    }
    const [count6, setCount6] = useState(0);
    const incrementCount6 = () => {
        setCount6(count6 + 1);
        setPrice6(price6 + 15);
    }
    const decrementCount6 = () => {
        setCount6(count6 -1)
        setPrice6(price6 - 15);
    }
    const [count7, setCount7] = useState(0);
    const incrementCount7 = () => {
        setCount7(count7 + 1);
        setPrice7(price7 + 17);
    }
    const decrementCount7 = () => {
        setCount7(count7 -1)
        setPrice7(price7 - 17);
    }
    const [count8, setCount8] = useState(0);
    const incrementCount8 = () => {
        setCount8(count8 + 1);
        setPrice8(price8 + 10);
    }
    const decrementCount8 = () => {
        setCount8(count8 -1)
        setPrice8(price8 - 10);
    }
    if (count1 < 0) {
        setCount1(count1 + 1)
    }
    if (price1 < 0) {
        setPrice1(price1 + 30)
    }
    if (count2 < 0) {
        setCount2(count2 + 1)
    }
    if (price2 < 0) {
        setPrice2(price2 + 20)
    }
    if (count3 < 0) {
        setCount3(count3 + 1)
    }
    if (price3 < 0) {
        setPrice3(price3 + 45)
    }
    if (count4 < 0) {
        setCount4(count4 + 1)
    }
    if (price4 < 0) {
        setPrice4(price4 + 40)
    }
    if (count5 < 0) {
        setCount5(count5 + 1)
    }
    if (price5 < 0) {
        setPrice5(price5 + 8)
    }
    if (count6 < 0) {
        setCount6(count6 + 1)
    }
    if (price6 < 0) {
        setPrice6(price6 + 15)
    }
    if (count7 < 0) {
        setCount7(count7 + 1)
    }
    if (price7 < 0) {
        setPrice7(price7 + 17);
    }
    if (count8 < 0) {
        setCount8(count8 + 1)
    }
    if (price8 < 0) {
        setPrice8(price8 + 10)
    }
    const reset = () => {
        setCount1(count1 - count1);
        setPrice1(price1 - price1);
        setCount2(count2 - count2);
        setPrice2(price2 - price2);
        setCount3(count3 - count3);
        setPrice3(price3 - price3);
        setCount4(count4 - count4);
        setPrice4(price4 - price4);
        setCount5(count5 - count5);
        setPrice5(price5 - price5);
        setCount6(count6 - count6);
        setPrice6(price6 - price6);
        setCount7(count7 - count7);
        setPrice7(price7 - price7);
        setCount8(count8 - count8);
        setPrice8(price8 - price8);
    }
    
    return (
        <>
            <table className="table table-striped table-hover  mt-3" style={{width: "1800px", marginLeft: "50px"}}>
                <thead>
                    <tr>
                        <th scope="col" colSpan={4} className='fs-5'>Shopping Cart</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">#</th>
                        <td > Food category </td>
                        <td> Number Of Item</td>
                        <td>Price</td>
                        <td>Add Item</td>
                        <td>Remove Item</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td> Burger </td>
                        <td> {count1}</td>
                        <td>{price1}</td>
                        <td > <i className="fa-solid fa-plus" onClick={incrementCount1}></i> </td>
                        <td > <i className="fa-solid fa-trash" onClick={decrementCount1}></i> </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td> Fries </td>
                        <td>{count2}</td>
                        <td>{price2}</td>
                        <td> <i className="fa-solid fa-plus" onClick={incrementCount2}></i> </td>
                        <td> <i className="fa-solid fa-trash" onClick={decrementCount2}></i> </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td> Pizza </td>
                        <td>{count3}</td>
                        <td>{price3}</td>
                        <td> <i className="fa-solid fa-plus" onClick={incrementCount3}></i> </td>
                        <td> <i className="fa-solid fa-trash" onClick={decrementCount3}></i> </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td> Chicken Grilled	 </td>
                        <td>{count4}</td>
                        <td>{price4}</td>
                        <td> <i className="fa-solid fa-plus" onClick={incrementCount4}></i> </td>
                        <td> <i className="fa-solid fa-trash" onClick={decrementCount4}></i> </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td> BBQ Salad	 </td>
                        <td>{count5}</td>
                        <td>{price5}</td>
                        <td> <i className="fa-solid fa-plus" onClick={incrementCount5}></i> </td>
                        <td> <i className="fa-solid fa-trash" onClick={decrementCount5}></i> </td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td> Molten Cake	 </td>
                        <td> {count6}</td>
                        <td>{price6}</td>
                        <td> <i className="fa-solid fa-plus" onClick={incrementCount6}></i> </td>
                        <td> <i className="fa-solid fa-trash" onClick={decrementCount6}></i> </td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td> Lemonade juice	 </td>
                        <td> {count7}</td>
                        <td>{price7}</td>
                        <td> <i className="fa-solid fa-plus" onClick={incrementCount7}></i> </td>
                        <td> <i className="fa-solid fa-trash" onClick={decrementCount7}></i> </td>
                    </tr>
                    <tr className='p-2'>
                        <th scope="row">8</th>
                        <td> Cola </td>
                        <td> {count8}</td>
                        <td>{price8}</td>
                        <td> <i className="fa-solid fa-plus" onClick={incrementCount8}></i> </td>
                        <td> <i className="fa-solid fa-trash" onClick={decrementCount8}></i> </td>
                    </tr>
                    <tr>
                        <th scope="row" className='pt-3'>9</th>
                        <td className='fs-5 bg-secondary pt-3'>Total Item  </td>
                        <td className='fs-5 bg-secondary pt-3'>{count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8} </td>
                        <td className='fs-5 bg-secondary pt-3'>Total Price </td>
                        <td className='fs-5 bg-secondary pt-3'>{price1 + price2 + price3 + price4 + price5 + price6 + price7 + price8} </td>
                        <td><button className='btn btn-info p-2 fs-5 text-center' onClick={reset}>Reset</button></td>
                        
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ShoppingCart;
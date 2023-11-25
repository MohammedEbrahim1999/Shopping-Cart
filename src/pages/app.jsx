import React from 'react';
import {   Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import NavBar from '../components/NavBar';
import Home from './home';
import ShoppingCart from './shoppingcart';
import Menu from './menu';
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route path='home' element={<Home/>} />
            <Route path='menu' element={<Menu/>} />
            <Route path='shoppingcart' element={<ShoppingCart/>} />
        </Route>
    )
)
function RootLayout() {
    return (
            <>
            <NavBar />
            <Outlet />
            </>
)
}
const App = () => {
    return (
        <RouterProvider router={router} />
    );
}
export default App;
import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {GoodsPage} from "./pages/goodsPage/GoodsPage";
import {Main} from "./components/Main/Main";
import {CartPage} from "./pages/CartPage/CartPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: 'goods',
                element: <GoodsPage />
            },
            {
                path: 'goods/:id',
                element: <GoodsPage />
            },
            {
                path: 'cart',
                element: <CartPage />
            },
        ],
    },
]);


export default router;
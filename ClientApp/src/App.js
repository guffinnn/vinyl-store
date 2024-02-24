import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Cart from "./pages/cart/Cart";
import Account from "./pages/account/Account";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/vinyl-store" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </Router>
    );
}

export default App;

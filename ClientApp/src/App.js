import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import HomePage from "./pages/home/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;

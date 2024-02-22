import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from './pages/pages';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

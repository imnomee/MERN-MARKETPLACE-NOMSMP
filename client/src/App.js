import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, ProtectedPage, Register } from './pages/pages';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedPage>
                                <Home />
                            </ProtectedPage>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

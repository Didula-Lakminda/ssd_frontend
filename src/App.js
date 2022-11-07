import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Blank from './pages/Blank';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="orders" element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;

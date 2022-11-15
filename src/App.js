import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Manager from './pages/Manager';
import Worker from './pages/Worker';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path="/home" element={<MainLayout />}>
                {localStorage.getItem('userRole') === 'admin' ? (
                    <Route index element={<Admin />} />
                ) : (
                localStorage.getItem('userRole') === 'manager' ? (
                        <Route index element={<Manager />} />
                ) : ( localStorage.getItem('userRole') === 'worker' ? (
                        <Route index element={<Worker />} />
                    ) : (
                        <Route index element={<Login />} />
                    )
                ))}
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;

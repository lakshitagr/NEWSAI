import React, { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route, PrefetchPageLinks } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import '@mantine/core/styles.css';
import { Toaster } from 'sonner';
import Preferences from './pages/preferences';
import { fetchProduct } from './redux/slice/productSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Homepage = lazy(() => 
  import('./pages/Homepage'));

import ProtectedRoutes from './components/ProtectedRoutes';
import LoadingSpinner from './components/LoadingSpinner';
import PreferenceProtectRoute from './components/PreferenceProtectRoute';
console.log(Homepage)
function App() {
  return (
    <div>
      <Navbar />

      <Toaster />
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Homepage />} />
            <Route element = {<PreferenceProtectRoute/>}>
               <Route path="/preferences" element={<Preferences />} />
            </Route>
           
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
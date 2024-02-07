import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

import Navbar from './components/Navbar.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <div>
              <Navbar />
              <App />
            </div>
          </QueryClientProvider>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,

)

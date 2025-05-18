import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import AuthProviderComponent from './Layout/AuthProviderComponent';
import Routes from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProviderComponent>
      <HelmetProvider>
             <Routes></Routes>
      </HelmetProvider>

      

      </AuthProviderComponent>
  </StrictMode>,
)

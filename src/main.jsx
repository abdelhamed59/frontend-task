import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import { BundleProvider } from './context/BundleContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BundleProvider>
    <App />
  </BundleProvider>
</StrictMode>,
)

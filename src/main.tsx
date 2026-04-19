import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import { EnrollmentProvider } from './context/EnrollmentContext.tsx'
import { LocaleProvider } from './context/LocaleContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <EnrollmentProvider>
          <LocaleProvider>
            <App />
          </LocaleProvider>
        </EnrollmentProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

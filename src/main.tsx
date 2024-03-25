import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouters from './AppRouters'
import { BrowserRouter } from 'react-router-dom'
import './global.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import Auth0ProviderWithNavigate from './auth0/Auth0ProviderWithNavigate'
import { Toaster } from 'sonner'

const queryClient = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
          <Toaster visibleToasts={1} position='top-right' richColors/>
          <AppRouters/>
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </BrowserRouter>    
  </React.StrictMode>,
)

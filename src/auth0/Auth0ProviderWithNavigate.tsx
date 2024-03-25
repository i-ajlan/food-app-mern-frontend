import { Auth0Provider } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom";

type PropsType = {
    children: React.ReactNode
}

const Auth0ProviderWithNavigate = ({children}:PropsType) => {
  const domainAuth0 = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientIdAuth0 = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUriAuth0 = import.meta.env.VITE_AUTH0_REDIRECT_URI;
  const audienceAuth0 = import.meta.env.VITE_AUTH0_AUDIENCE;
  
  const navigate = useNavigate()

  const onRedirectCallback = () => {
    navigate('/auth-page');
  }
  
    return (
    <Auth0Provider
        domain={domainAuth0}
        clientId={clientIdAuth0}
        authorizationParams={{
            redirect_uri:redirectUriAuth0,
            audience:audienceAuth0,
        }}
        onRedirectCallback={onRedirectCallback}
    >
        {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate
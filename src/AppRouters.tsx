import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import OrderStatus from './pages/OrderStatus'
import AuthPage from './pages/AuthPage'
import ProtectedRoute from './components/ProtectedRoute'


const AppRouters = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout showHero><Home/></Layout>} />
      <Route path='/auth-page' element={<AuthPage/>} />
      <Route element={<ProtectedRoute/>}>
        <Route path='/user-profile' element={<Layout><UserProfile/></Layout>}/>
        <Route path='/order-status' element={<Layout><OrderStatus/></Layout>}/>
      </Route>
      <Route path='*' element={<Layout><div>This path doesn't exist</div></Layout>}/>
    </Routes>
  )
}

export default AppRouters
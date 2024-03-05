import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from './pages/Home'
import Chat from "./pages/Chat"
import NotFound from "./pages/NotFound"
import { useAuth } from "./context/AuthContext"
const App = () => {

  console.log(useAuth()?.isLoggedIn)

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/chat" element={ <Chat />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </main>
  )
}

export default App

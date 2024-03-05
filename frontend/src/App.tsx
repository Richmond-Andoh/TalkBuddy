import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from './pages/Home'
import Chat from "./pages/Chat"
import NotFound from "./pages/NotFound"
const App = () => {

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

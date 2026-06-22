import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import CustomCursor from './components/CustomCursor/CustomCursor'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage'

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  )
}

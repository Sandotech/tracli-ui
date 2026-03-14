import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InstallPage from './pages/InstallPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InstallPage />} />
      </Routes>
    </BrowserRouter>
  )
}


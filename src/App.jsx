import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Portfolio from '@/components/pages/Portfolio'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/category/:category" element={<Portfolio />} />
        <Route path="/project/:id" element={<Portfolio />} />
      </Routes>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </div>
  )
}

export default App
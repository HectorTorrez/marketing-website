import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { ProductDetails } from './products/components/ProductDetails'
import { Cards } from './ui/components/Cards/Cards'
import { MainLayout } from './ui/components/Main/MainLayout'





function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Cards />} />
        <Route path='cards/:id' element={<ProductDetails />} />

      </Route>
    </Routes>

  )
}

export default App

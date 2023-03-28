import { Outlet } from "react-router-dom"
import { ProductsContext } from "../../../products/components/ProductContext/ProductsContext"
import { Navbar } from "../Navbar"
import { Title } from "../Title/Title"
import './MainLayout.css'

export const MainLayout = () => {
  return (
    <ProductsContext>
      <main className="main-layout">
        <Navbar />
        <Title />
        <Outlet />
      </main>
    </ProductsContext>
  )
}
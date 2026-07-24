import { DashboardNavbar } from "../../components/DashboardComponents/Navbar/DashboardNavbar";
import { Sidebar } from "../../components/DashboardComponents/Sidebar/Sidebar";
import './HomeDashboard.css'
import { Home } from "./Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { ClientList} from "./clientList/ClientList";
import { rowsClients } from "../../mocks/data/ClientsRow";
import { Client } from "./client/Client";
import { NewClient } from "./newClient/NewClient";
import { ProductList } from "./productList/ProductList";
import { rowsProducts } from "../../mocks/data/ProductsRow";
import { Product } from "./product/Product";
import { ProductEdit } from "./productEdit/ProductEdit";
import { NewProduct } from "./newProduct/NewProduct";


export function HomeDashboard(){
  return(
    <>
      <DashboardNavbar/>
    <div className="container">

      <Sidebar/>

      <main className="content">
        <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/clients" element={<ClientList client={rowsClients}/>}/>
      <Route path="/clients/:clientId" element={<Client/>} />
      <Route path="/newClient" element={<NewClient/>} />
      <Route path="/productList" element={<ProductList product={rowsProducts}/>} />
      <Route path="/product/:productId" element={<Product/>}/>
      <Route path="/productEdit/:productId" element={<ProductEdit/>} />
      <Route path="/newProduct" element={<NewProduct/>} />
      </Routes>

      </main>
    </div>
    </>
  )
  }
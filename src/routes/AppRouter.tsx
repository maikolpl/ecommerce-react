import { Route, Routes } from "react-router-dom";
import { HomeEcommerce } from "../pages/pagesEcommerce/HomeEcommerce";
import { HomeDashboard } from "../pages/pagesDashboard/HomeDashboard";
import { Home } from "../pages/Home";


export function AppRouter(){
    return(
        <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/ecommerce" element={<HomeEcommerce/>}/>
            <Route path="/dashboard/*" element={<HomeDashboard/>}/>
        </Routes>
    )
}
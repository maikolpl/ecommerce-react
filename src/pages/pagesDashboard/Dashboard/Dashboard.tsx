import { Chart } from '../../../components/DashboardComponents/chart/Chart'
import { FeaturedInfo } from '../../../components/DashboardComponents/featuredInfo/FeaturedInfo'
import { WidgetLg } from '../../../components/DashboardComponents/widgetLg/WidgetLg'
import { WidgetSm } from '../../../components/DashboardComponents/widgetSm/WidgetSm'
import { clientsTop } from '../../../mocks/data/ClientsTop'
import { ordenes } from '../../../mocks/data/Ordenes'
import './Dashboard.css'

export function Home(){
    return(
        <div className="home">
            <FeaturedInfo/>
            <Chart/>
            <div className="homeWidgets">
                <WidgetSm pedidos = {ordenes}/>
                <WidgetLg clientes={clientsTop}/>
            </div>
        </div>

    )
    
}
import './Chart.css'
import { SalesChart } from './LineChart'
import { ventasData } from '../../../mocks/data/Data'
import { PieChartCustom } from './PieChart'


export function Chart(){
    return(
        <div className="chart">
            <div className="salesChart">
                <SalesChart  data={ventasData} />
                
            </div>
            <div className="pieChartCustom">
                <PieChartCustom data={ventasData}/>

            </div>
        
             

        </div>
       
        
    )
}
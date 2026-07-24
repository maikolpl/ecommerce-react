
import './LIneChart.css'
import { ResponsiveContainer,LineChart, Line,CartesianGrid, XAxis, YAxis,Tooltip, Legend } from 'recharts';
import { type VentaData } from '../../../mocks/data/Data';
import { ArrowUpward } from '@mui/icons-material';
type ChartProps = {
    data:VentaData[]
}

export function SalesChart({data}:ChartProps){
    return(
        <div className="salesChart">
        <div className="salesChartInfo">
            <div className="leftInfo">
                <h3 className='salesChartTitle'>Ingresos</h3>
            <div className="salesMoneyContainer">
            <span className="salesMoney">$125,430.50</span>
            <span className="salesMoneyRate"><ArrowUpward className='featuredIcon'/>12.5%</span>
            </div>
            </div>
            <select name="" id="" className='salesOptions'>
                <option value="">Mensual</option>
                <option value="">Anual</option>
                <option value="">Diario</option>
            </select>
            
        </div>
        <ResponsiveContainer width = '100%' aspect = {4 / 1} className='table'>
        <LineChart data = {data}>
            <XAxis dataKey= 'mes' stroke='#5550bd'/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            
            <Line 
            type='monotone'
            dataKey='ventas'
            stroke= '#8884d8'
            strokeWidth ={3}
            />
            <Line
            type= 'monotone'
            dataKey = 'usuarios'
            stroke= '#82ca9d'
            strokeWidth={3}
            />
            <CartesianGrid/>
        </LineChart>

        </ResponsiveContainer>
        </div>

    
    )
}
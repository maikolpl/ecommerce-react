import { Legend, Pie, PieChart,  ResponsiveContainer, Tooltip } from 'recharts';
import type { VentaData } from '../../../mocks/data/Data';
import './PieChart.css'


type PieChartProps = {
    data:VentaData[]
}

export function PieChartCustom({data}:PieChartProps){

    const pieData = data.map((item)=>({
        name:item.categoria.producto,
        value: item.categoria.ventasProduct,
        fill:item.categoria.fill
        
    }))
    return(
        <div className="pieChart">
            <div className="pieChartInfo">
                <h3 className='pieChartTitle'>Ventas por categoria</h3>
            <select name="" id="" className='pieChartOptions'>
                <option value="">Este Mes</option>
                <option value="">Mes Anterior</option>
                <option value="">Año</option>
            </select>
            </div>

            <ResponsiveContainer width='100%' height={320} >
                <PieChart>
                    <Pie
                data={pieData}
                dataKey='value'
                nameKey= 'name'
                cx= '45%'
                cy = '45%'
                outerRadius={80}
                fill='fill'
                label
                >
                </Pie>
                <Legend
                        verticalAlign="bottom"
                        height={36}
                />
            <Tooltip />
                    
                </PieChart>
                

            </ResponsiveContainer>

        </div>
    )
}
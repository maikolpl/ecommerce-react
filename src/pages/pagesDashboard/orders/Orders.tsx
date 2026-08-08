import { ordenes } from '../../../mocks/data/Ordenes'
import { AssistenceCenter } from './AssistenceCenter'
import { BoardOrders } from './BoardOrders'
import { InfoOrders } from './InfoOrders'
import './Orders.css'

export function Orders(){
    return(
    <div className='orders'>
        <InfoOrders/>
        <AssistenceCenter/>
        <BoardOrders orden={ordenes}/>
    </div>
    )

}
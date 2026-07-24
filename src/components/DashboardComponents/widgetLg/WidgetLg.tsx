import type { ClientTop } from '../../../mocks/data/ClientsTop'
import './WidgetLg.css'

type widgetLgProps = {
    clientes: ClientTop[]
}
export function WidgetLg({clientes}:widgetLgProps){
    return(
        <div className="widgetLg">
        <span className="widgetLgTitle">Clientes Top</span>
        <ul className="widgetLgList">
            {clientes.map((cliente)=>(
            <li className="widgetLgListItem" key={cliente.id}>
                <span className='widgetLgClientId'>{cliente.id}</span>
                <img src={cliente.img} alt={cliente.companyName} className="widgetLgClientImg" />
                <div className="widgetLgClient">
                <h5 className='widgetLgClientCompany'>{cliente.companyName}</h5>
                <p className='widgetLgClientEmail'>{cliente.email}</p>
                </div>
                <span className='widgetLgClientMoney'>{cliente.money}</span>
            </li>
        ))}

        </ul>
     
       
        </div>
    )

}
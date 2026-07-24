import './WidgetSm.css'
import type { Orden } from '../../../mocks/data/Ordenes'

type widgetProps = {
    pedidos: Orden[]
}
export function WidgetSm({pedidos}:widgetProps){
    return(
        <div className="widgetSm">
        <span className="widgetSmTitle">Órdenes Recientes</span>
        <section className="widgetSmList">
        <header className='tabla-fila tabla-header'>
            <div>Orden</div>
            <div>Cliente</div>
            <div>Fecha</div>
            <div>Total</div>
            <div>Estado</div>
            <div></div>
        </header>
        {pedidos.map((pedido)=>(
            <article className='tabla-fila' key={pedido.id}>
                <div className="orden">
                    {pedido.id}
                </div>
                <div className="cliente">
                    {pedido.cliente}
                </div>
                <div className="fecha">
                    {pedido.fecha}
                </div>
                <div className="total">
                    {pedido.total}
                </div>
                <div>
                    <span className={`badge ${pedido.claseEstado}`}>
                        {pedido.claseEstado}
                    </span>
                </div>
            </article>
        ))}
        </section>
        </div>
    )

}
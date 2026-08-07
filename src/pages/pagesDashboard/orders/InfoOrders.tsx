import { ArrowUpward, LocalMall, MopedSharp, PriorityHigh, TaskAlt, Timer, WhereToVoteSharp } from '@mui/icons-material';
import './InforOrders.css'
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';
import MapIcon from '@mui/icons-material/Map';

export function InfoOrders(){
    return(
    <main className='InforOrdersContainer'>
    <div className="inforOrdersTop">
        <div className="containerInfoTitle">
            <OutgoingMailIcon className='infoIcon'/>
            <h2 className='infoOrdersTitle'>Órdenes</h2>
        </div>
        <p className='descriptionPage'>Gestiona y controla todas las ordenes de tu negocio</p>
    </div>

    <div className='infoOrders'>
        <div className='infoOrdersItem'>
            <div className='iconContainerItem'>
                <LocalMall className='iconItem '/>
            </div>
            <div className="infoOrdersContent">
                <h3 className='inforOrdersItemTitle'>Total Ordenes</h3>

                <span className='totalsItem'>250</span>

                <div className="infoPorcentage">
                <span className="Porcentage"><ArrowUpward className='featuredIcon'/>18.5% vs ayer</span>
                </div>
            </div>
            
        </div>


        <div className='infoOrdersItem'>
            <div className='iconContainerItemMissing'>
                <Timer className='iconMissing'/>
            </div>
            <div className="infoOrdersContent">
                <h3 className='inforOrdersItemTitle'>Pendientes</h3>

                <span className='totalsItem'>18</span>

                <div className="infoImportant">
                <span className="important"><PriorityHigh className='iconPriority'/>requiere atención</span>
                </div>
            </div>
            
        </div>



<div className='infoOrdersItem'>
            <div className='iconContainerMoped'>
                <MopedSharp className='iconMoped'/>
            </div>
            <div className="infoOrdersContent">
                <h3 className='inforOrdersItemTitle'>Enviadas</h3>

                <span className='totalsItem'>210</span>

                <div className="infoDelivered">
                <span className="delivered"><MapIcon className='MapIconDelivered'/>Este Mes</span>
                </div>
            </div>
            
        </div>



<div className='infoOrdersItem'>
            <div className='iconContainerCompleted'>
                <TaskAlt className='iconCompleted'/>
            </div>
            <div className="infoOrdersContent">
                <h3 className='inforOrdersItemTitle'>Completadas</h3>

                <span className='totalsItem'>198</span>

                <div className="infoCompleted">
                <span className="completed"><WhereToVoteSharp className='completedIcon'/>Este Mes</span>
                </div>
            </div>
            
        </div>




      

    </div>
    </main>
    )
}
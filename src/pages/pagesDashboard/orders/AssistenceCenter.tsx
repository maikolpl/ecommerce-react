import { ArrowRightAlt, Error } from '@mui/icons-material';
import './AssistenceCenter.css'
import CampaignIcon from '@mui/icons-material/Campaign';

export function AssistenceCenter(){
    return(
        <main className="assistenceCenter">
            <div className="assitenceCenterIconContainer">
            <CampaignIcon className='iconAlert'/>
            </div>
            <div className="assistenceContent">
                <h2 className="assistenceTitle">Centro de asistencia</h2>
            <div className="assistenceContainer">

                <div className="assisteneceItem">
                     <div className="alertItemContainer">
                    <Error className='circleErrorAlert'/>
                    <p className='alertItem'>4 órdenes llevan mas de 24 horas pendientes</p>
                    </div>
                    <div className="completAlerContainer">
                    <p className='completAlert'>ver ordenes</p>
                    <ArrowRightAlt className='IconCompletAlert'/>
                    </div>
                </div>

                <div className="assisteneceItem">
                     <div className="alertItemContainer">
                    <Error className='circleErrorAlert'/>
                    <p className='alertItem'>2 ordenes necesitan confirmación de pago</p>
                    </div>
                    <div className="completAlerContainer">
                    <p className='completAlert'>ver ordenes</p>
                    <ArrowRightAlt className='IconCompletAlert'/>
                    </div>
                </div>

                <div className="assisteneceItem">
                     <div className="alertItemContainer">
                    <Error className='circleErrorAlert'/>
                    <p className='alertItem'>Hoy se realizarón 22 ordenes 18% mas que ayer</p>
                    </div>
                    <div className="completAlerContainer">
                    <p className='completAlert'>ver reporte</p>
                    <ArrowRightAlt className='IconCompletAlert'/>
                    </div>
                </div>

                  <div className="assisteneceItem">
                     <div className="alertItemContainer">
                    <Error className='circleErrorAlert'/>
                    <p className='alertItem'>Hay 3 ordenes con productos agotados</p>
                    </div>
                    <div className="completAlerContainer">
                    <p className='completAlert'>ver ordenes</p>
                    <ArrowRightAlt className='IconCompletAlert'/>
                    </div>
                </div>
                
                   

            </div>
            
            </div>
        </main>
    )
}
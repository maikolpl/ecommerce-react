import { AssignmentAdd, KeyboardBackspaceSharp } from '@mui/icons-material';
import './NewClient.css'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link } from 'react-router-dom';


export function NewClient (){
    return(
        <div className='newClient'>
            <div className="newClientTitleContainer">
                <PersonAddAltIcon className='iconNewClientTitle'/>
                <h1 className="newClientTitle"> Crear Nuevo CLiente</h1>
                <Link to={'/dashboard/clients'} className='linkBack'>
                <button className='buttonBack'><KeyboardBackspaceSharp />Volver</button>
                </Link>
            </div>

            <form className="newClientForm">
                <div className="newClientUpdateItem">
                            <label>Nombre</label>
                            <input type="text" placeholder='Nombre Completo Del Cliente' className="clientEditInput"/>
                        </div>

                        <div className="newClientUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='correo@ejemplo.com' className="clientEditInput"/>
                        </div>

                        <div className="newClientUpdateItem">
                            <label>Empresa</label>
                            <input type="text" placeholder='Nombre De La Empresa' className="clientEditInput"/>
                        </div>

                        <div className="newClientUpdateItem">
                            <label>Telefono</label>
                            <input type="tel" placeholder='Numero De Telefono' className="clientEditInput"/>
                        </div>

                        <div className="newClientUpdateItem">
                            <label>Compras Iniciales</label>
                            <input type="number" placeholder='0.00' className="clientEditInput"/>
                        </div>

                        <div className="newClientUpdateItem">
                            <label>Estado</label>
                            <select name="state" className="newClientEditSelect">
                                <option value="">Pendiente</option>
                                <option value="activo">Activo</option>
                                <option value="cancelado">Cancelado</option>
                            </select>
                        </div>

                        <div className="newClientUpdateItem">
                            <label>Nota (Opcional)</label>

                            <textarea placeholder='Informacion adicional sobre el cliente' className='newClientNotes'></textarea>
                            
                        </div>

                        <button className="newClientbuttonKeep"> <AssignmentAdd/>Crear Cliente</button>
            </form>

           
            
        </div>
    )
}
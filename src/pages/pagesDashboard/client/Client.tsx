import { Link, useParams } from "react-router-dom"
import './Client.css'
import { rowsClients } from "../../../mocks/data/ClientsRow";
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import { AccountCircle, Add, Business, Chat, ManageAccounts, PersonPinCircle, RequestPage, Task } from "@mui/icons-material";


export function Client(){
    const {clientId}= useParams();

     const client = rowsClients.find(
        client => client.id === Number(clientId)
     )
    return(
        <div className="client">
            <div className="clientTitleContainer">
                
                <h1 className="clientTitle"> <ManageAccounts className="iconTitle"/> Editar Cliente: {client?.cliente}</h1>
                <Link to = '/dashboard/newClient' className="linkClient">
                <button className="clientAddButton"> <Add/>Crear</button>
                </Link>
            </div>
            <div className="clientContainer">
                <div className="clientShow">
                        <div className="clientShowTop">
                        <AccountCircle className="clientIcon"/>
                            <h2 className="clientShowName">{client?.cliente}</h2>
                </div>
                <div className="clientShowBottom">
                    <div className="clientInfo">
                        <Grid3x3Icon className="idIcon"/>
                    <p className="clientId">cliente: {client?.id}</p>
                    </div>
                   <div className="clientInfo">
                    <Chat className="EmailIcon"/>
                    <p className="clientEmail">{client?.email}</p>
                   </div>
                    
                    <div className="clientInfo">
                        <Business className="companyIcon"/>
                        <p className="clientCompany">{client?.empresa}</p>
                    </div>
                    
                    <div className="clientInfo">
                        <RequestPage className="pageIcon"/>
                    <p className="clientPage">{client?.compras}</p>

                    </div>
                    <div className="clientInfo">
                        <PersonPinCircle className="personState"/>
                    <p className="clientState">{client?.estado}</p>
                    </div>
                </div>
                </div>
                
                <div className="clientUpdate">
                    <h2 className="editClient">Actualizar Cliente</h2>
                    <form className="clientUpdateForm">
                        <div className="clientUpdateItem">
                            <label>Nombre</label>
                            <input type="text" placeholder={`${client?.cliente}`} className="clientEditInput"/>
                        </div>

                        <div className="clientUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder={`${client?.email}`} className="clientEditInput" />
                        </div>

                        <div className="clientUpdateItem">
                            <label>Empresa</label>
                            <input type="text" placeholder={`${client?.empresa}`} className="clientEditInput" />
                        </div>

                        <div className="clientUpdateItem">
                            <label>Compras</label>
                            <input type="text" placeholder={`${client?.compras}`} className="clientEditInput" />
                        </div>
                        <div className="clientUpdateItem">
                            <label>Estado</label>
                            <select name="state" className="clientEditSelect">
                                <option value="">Pendiente</option>
                                <option value="activo">Activo</option>
                                <option value="cancelado">Cancelado</option>
                            </select>
                        </div>
                        <button className="buttonKeep"> <Task/>Guardar</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
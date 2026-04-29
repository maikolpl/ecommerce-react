import './UserModals.css'
import candado from '../icons/candado.png'
import logo from '../logos/logo.png'
import buzo from '../logos/logoSirve.png'
import email from '../icons/usuario-2.svg'


type Props = {
    onClose:() => void
}

export function UserModals ({onClose}: Props){
    return(
<div className='user-overlay'>
    <button type='button' onClick={onClose}>✖</button>
    <div className="user-modal">
        <form>
            <div className='contenedor-logo'>
            <img src={logo} alt="logo" />
            </div>


    <div className="usuario-izquierda">
    <img src={buzo} alt="chaqueta" />
    <div className="botones">
    <button className="crear">CREAR USUARIO</button>
    </div>
    </div>


    <div className="usuario-derecha">
        <div className="contenedor-derecha">
        <img src={logo} alt="logo" />


        <div className="input-email">
            <img src={email} alt="email" />
            <input type="email" placeholder="Correo Electronico"/>
        </div>


        <div className="input-password">
            <img src={candado} alt="password" />
            <input type="password" placeholder="Contraseña" />
        </div>


            <a href="/" className="new-contraseña">Olvidé mi contraseña</a>
        </div>


        <button className="iniciar">INICIAR SESION</button>
    </div>
    </form>
</div>
</div>

    )
}
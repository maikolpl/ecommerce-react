import './MenuPanel.css'

type Props ={
    onClose:()=>void
}

export function MenuPanel ({onClose}:Props){
    return(
        <div className="menu-panel">
            <button onClick={onClose} className="menu-close">
            ✖
            </button>

            <ul>
                <li>NOVEDADES</li>
                <li>LOOKS VACACIONALES</li>
                <li>ROPA DE LINO</li>
                <li>DIA DE LAS MADRES</li>
                <br />
                <div className="menu-section">
                <li>ROPA</li>
                <li>ACCESEORIOS</li>
                <li>ZAPATOS</li>
                <li>SPORT</li>
                <li>BLUSAS Y CAMISAS</li>
                </div>
               
                <br />
                <div className="menu-section">
                <p className="oferta">OFERTA</p>
                <li>UNETE Y RECIBE 10% DE DESCUENTO</li>
                </div>
                
            </ul>

        </div>
    )

}
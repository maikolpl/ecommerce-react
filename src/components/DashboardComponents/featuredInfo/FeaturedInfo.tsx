import { ArrowUpward, AttachMoney, ShoppingCart, Wallet, WavingHand } from '@mui/icons-material';
import './FeaturedInfo.css'
import PeopleIcon from '@mui/icons-material/People';


export function FeaturedInfo(){
    return(
        <div className="featuredContainer">
            <div className="featuredTop">
                <h2 className='Featured-greet'>!Bienvenido Daniel¡<WavingHand className='greetIcon'/> </h2>
            <p className='featuredSub'> Aqui tienes un resumen de tu empresa</p>
            </div>
            <div className="featured">

            <div className="featuredItem">
                <h3 className="featuredTitle">Ingresos Totales</h3>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$125,430.50</span>
                    </div>
                    <div className="moneyContainerDown">
                    <span className="featuredMoneyRate"><ArrowUpward className='featuredIcon'/>12.5% vs el mes pasado</span>
                    <span className='money'><AttachMoney/></span>
                    </div>
                </div>

                <div className="featuredItem">
                <h3 className="featuredTitle">Ordenes Totales</h3>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">1,243</span>
                    </div>
                    <div className="moneyContainerDown">
                    <span className="featuredMoneyRate"><ArrowUpward className='featuredIcon'/>8.2% vs el mes pasado</span>
                    <span className='shoppingCart'><ShoppingCart/></span>
                    </div>
                </div>

                <div className="featuredItem">
                <h3 className="featuredTitle">Clientes Nuevos</h3>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">356</span>
                    </div>
                    <div className="moneyContainerDown">
                    <span className="featuredMoneyRate"><ArrowUpward className='featuredIcon'/>15.3% vs el mes pasado</span>
                    <span className='peopleIcon'><PeopleIcon/></span>
                    </div>
                </div>

                <div className="featuredItem">
                <h3 className="featuredTitle">Ganacia Neta</h3>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$32,540.20</span>
                    </div>
                    <div className="moneyContainerDown">
                    <span className="featuredMoneyRate"><ArrowUpward className='featuredIcon'/>9.5% vs el mes pasado</span>
                    <span className='wallet'><Wallet/></span>
                    </div>
                </div>
                
        </div>

        </div>
       
    )
}
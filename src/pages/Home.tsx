import { Link } from "react-router-dom";



export function Home(){
    return(
        <div>
            <h1>Bienvenido</h1>
            
            <Link to='/ecommerce'>
            <button>Ecommerce 🛒</button>
            </Link>

            <Link to='/dashboard'>
            <button>Dashboard 📊</button>
            </Link>
        </div>
    )
}
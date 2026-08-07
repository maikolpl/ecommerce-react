    import './sidebar.css'
    import HomeIcon from '@mui/icons-material/Home';
    import LeaderboardIcon from '@mui/icons-material/Leaderboard';
    import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
    import PeopleIcon from '@mui/icons-material/People';
    import WorkIcon from '@mui/icons-material/Work';
    import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
    import DescriptionIcon from '@mui/icons-material/Description';
    import BookmarksIcon from '@mui/icons-material/Bookmarks';
    import PendingActionsIcon from '@mui/icons-material/PendingActions';
    import SupportAgentIcon from '@mui/icons-material/SupportAgent';
    import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
    import SettingsIcon from '@mui/icons-material/Settings';
    import CheckCircleIcon from '@mui/icons-material/CheckCircle';
    import { NavLink } from 'react-router-dom';

    export function Sidebar() {

    return (

    <div className='sidebar'>

        <div className="sidebar-container">
            
            <div className="sidebar-menu">

                <h3 className="sidebarTiltle">Principal</h3>

                <ul className="sidebarList">

                    <NavLink to='/dashboard' className='sidebarLink'>
                    <li className="sidebarListItem">
                        <HomeIcon className='icon'/>
                        Dashboard
                    </li>
                    </NavLink>
                
                    <li className="sidebarListItem">
                        <LeaderboardIcon className='icon'/>
                        Analitics
                    </li>

                    <li className="sidebarListItem">
                        <ShoppingCartIcon className='icon'/>
                        Ventas
                    </li>

                    <NavLink to='/dashboard/clients' className='sidebarLink'>
                        <li className="sidebarListItem">
                        <PeopleIcon className='icon'/>
                        Clientes
                    </li>
                    </NavLink>

                    <NavLink to='/dashboard/productList' className='sidebarLink'>
                    <li className="sidebarListItem">
                        <WorkIcon className='icon'/>
                        Productos
                    </li>
                    </NavLink>
                    
                    <NavLink to='/dashboard/orders' className='sidebarLink'>
                    <li className="sidebarListItem">
                        <ForwardToInboxIcon className='icon'/>
                        Ordenes
                    </li>
                    </NavLink>
                    

                    <li className="sidebarListItem">
                        <DescriptionIcon className='icon'/>
                        Facturación
                    </li>

                </ul>

            </div>

            <div className="sidebar-menu">

                <h3 className="sidebarTiltle">Gestión</h3>

                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <PeopleIcon className='icon'/>
                        Empleados
                    </li>

                    <li className="sidebarListItem">
                        <BookmarksIcon className='icon'/>
                        Proyectos
                    </li>

                    <li className="sidebarListItem">
                        <PendingActionsIcon className='icon'/>
                        Tareas
                    </li>

                    <li className="sidebarListItem">
                        <SupportAgentIcon className='icon'/>
                        Soporte
                    </li>

                    <li className="sidebarListItem">
                        <CalendarMonthIcon className='icon'/>
                        Calendario
                    </li>

                </ul>

            </div>

            <div className="sidebar-menu">

                <h3 className="sidebarTiltle">Configuración</h3>

                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <SettingsIcon className='icon'/>
                        Ajustes
                    </li>

                    <li className="sidebarListItem">
                        <CheckCircleIcon className='icon'/>
                        Permisos
                    </li>

                </ul>

            </div>

        
            <div className="sidebar-user">

                <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="avatar"
                    className='person-avatar'
                />

                <div className="rol">
                    <p>Daniel Ramírez</p>
                    <p>Admin</p>
                </div>

            </div>

        </div>

    </div>

    )

    }
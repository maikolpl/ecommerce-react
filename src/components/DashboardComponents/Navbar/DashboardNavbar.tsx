import './DashboardNavbar.css'
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
export function DashboardNavbar(){
return(
    <div className="dashboardNavbar">
        <div className="dashboardNavbar-content">
                <div className="dashboardNavbar-left">
                    <p className='dashboardLogo'>Dashboard</p>
                </div>
                <div className="dashboardNavbar-right">
                    <div className="dashboardNavbarIconContainer">
                        <NotificationsIcon/>
                        <span className='icon-counter'>2</span>
                    </div>
                        <div className="dashboardNavbarIconContainer">
                        <EmailIcon/>
                        <span className='icon-counter'>2</span>
                    </div>
                        <div className="dashboardNavbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar" className='person-avatar' />
                </div>

        </div>

    </div>
)
}
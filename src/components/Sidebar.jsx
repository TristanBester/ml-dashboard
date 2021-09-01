import '../styles/Sidebar.css'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='Sidebar'>
            <div className="ContainerTop">
                <div className="UserDetails">
                    <h4 className='Initials'>CT</h4>
                    <h3 className="Heading">Username</h3>
                </div>
                <hr className="TopDivider" />
            </div>
            <div className="ContainerBottom">
                <ul className="SidebarList">
                    <li className="SidebarListItem">
                        <NavLink to="/dashboard" activeClassName="ActiveOne" style={{ textDecoration: 'none' }}>
                            <AssessmentOutlinedIcon className="SidebarIcon" />
                            <span className='SidebarText'>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="SidebarListItem">
                        <NavLink to="/home" activeClassName="ActiveOne" style={{ textDecoration: 'none' }}>
                            <HomeIcon className="SidebarIcon" />
                            <span className='SidebarText'>Home</span>
                        </NavLink>
                    </li>
                    <li className="SidebarListItem">
                        <TimelineIcon className="SidebarIcon" />
                        <span className='SidebarText'>Analytics</span>
                    </li>
                    <li className="SidebarListItem">
                        <BlurOnOutlinedIcon className="SidebarIcon" />
                        <span className='SidebarText'>Statistics</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}


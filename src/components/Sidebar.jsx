import '../styles/Sidebar.css'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';

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
                        <AssessmentOutlinedIcon className="SidebarIcon" />
                        <span className='SidebarText'>Dashboard</span>
                    </li>
                    <li className="SidebarListItem">
                        <HomeIcon className="SidebarIcon" />
                        <span className='SidebarText'>Home</span>
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


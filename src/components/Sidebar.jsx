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
                        Dashboard
                    </li>
                    <li className="SidebarListItem">
                        <HomeIcon className="SidebarIcon" />
                        Home
                    </li>
                    <li className="SidebarListItem">
                        <TimelineIcon className="SidebarIcon" />
                        Analytics
                    </li>
                    <li className="SidebarListItem">
                        <BlurOnOutlinedIcon className="SidebarIcon" />
                        Statistics
                    </li>
                </ul>
            </div>
        </div>
    )
}


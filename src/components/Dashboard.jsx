import '../styles/Dashboard.css'
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { XAxis, YAxis, CartesianGrid, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { data, data0, data01, data02 } from '../data.js'
import DashboardGraph from './DashboardGraph';
import DashboardTable from './DashboardTable';

export default function Dashboard() {
    return (
        <div className='Dashboard'>
            <div className="DashboardTopCardContainer">
                <div className="DashboardTopCard">
                    <MultilineChartIcon className="DashboardTopCardIcon"/> 
                    <div className="DashboardTopCardInfo">
                        <h3>Kolmogorov Smirnov Distance</h3>
                        <h4>Feature one</h4>
                        <h1>51.96</h1>
                    </div>
                </div>
                <div className="DashboardTopCardGraph">
                    <ResponsiveContainer width="100%" height={150}>
                        <BarChart
                            data={data}
                            margin={{
                                top: 30,
                                bottom: 0,
                                right: 20,
                                left: 20
                            }}>
                            <defs>
                                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#dd53ca" stopOpacity={0.7} />
                                    <stop offset="75%" stopColor="#b661e9" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <Bar dataKey="uv" fill="url(#color)" opacity={0.8} />
                        </BarChart>
                    </ResponsiveContainer>
                    <h3>Feature one distribution</h3>
                    <h4>Calculated over past 7 days</h4>
                </div>
                <div className="DashboardTopCard">
                    <DonutLargeIcon className="DashboardTopCardIcon"/> 
                    <div className="DashboardTopCardInfo">
                        <h3>Mean Feature Increase</h3>
                        <h4>Feature one</h4>
                        <h1>0.45%</h1>
                    </div>
                </div>
                <div className="DashboardTopCard">
                    <BubbleChartIcon className="DashboardTopCardIcon"/> 
                    <div className="DashboardTopCardInfo">
                        <h3>Jensen-Shannon Divergence</h3>
                        <h4>Feature one</h4>
                        <h1>12.34</h1>
                    </div>
                </div>
                <div className="DashboardTopCard">
                    <MultilineChartIcon className="DashboardTopCardIcon"/> 
                    <div className="DashboardTopCardInfo">
                        <h3>Kolmogorov Smirnov Distance</h3>
                        <h4>Feature one</h4>
                        <h1>51.96</h1>
                    </div>
                </div>
            </div>
            <div className="DashboardBottomContainer">
                <div className="DashboardBottomLeft">
                    <div className="DashboardGraphContainer">
                        <DashboardGraph 
                            dataOne={data}
                            dataTwo={data0}/>
                        <div className="DashboardBottomBar">
                            <div className="DashboardBottomBarItem">
                                <img src="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/oriental-lily.jpg?itok=8QILjH76"
                                    alt="nice" 
                                    className="DashboardImg" />
                                <div className="DashboardBottomBarLabelContainer">
                                    <h3>Profile one</h3>
                                    <h4>Last access one week ago...</h4>
                                </div>
                            </div>
                            <div className="DashboardBottomBarItem">
                                <img src="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/oriental-lily.jpg?itok=8QILjH76"
                                    alt="nice" 
                                    className="DashboardImg" />
                                <div className="DashboardBottomBarLabelContainer">
                                    <h3>Profile one</h3>
                                    <h4>Last access one week ago...</h4>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="DashboardBottomRight">
                    <DashboardTable/>
                </div>
            </div>
            
        </div>
    )
}

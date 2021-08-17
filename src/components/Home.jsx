import '../styles/Home.css'
import { data, data01, data02 } from '../data.js'
import AreaChartCardLarge from './AreaChartCardLarge';
import LineChartCardSmall from './LineChartCardSmall';
import BarChartCardSmall from './BarChartCardSmall';
import ScatterCardSmall from './ScatterCardSmall';

export default function Home() {
    return (
        <div className='Home'>
            <div className="MainChartContainer">
                <AreaChartCardLarge
                    heading="Performance"
                    label="Turn over"
                    leftName="Total"
                    middleName="Churn"
                    rightName="Drift"
                    navigator={true}
                    data={data} />
            </div>
            <div className="BottomChartsContainer">
                <div className="LeftChart">
                    <BarChartCardSmall
                        heading="Proportions"
                        label="Tiers"
                        data={data} />
                </div>
                <div className="MiddleChart">
                    <ScatterCardSmall
                        heading="Samples"
                        label="Data"
                        dataOne={data01}
                        dataTwo={data02} />
                </div>
                <div className="RightChart">
                    <LineChartCardSmall
                        name="Statistics"
                        label="Distribution"
                        leftName="KS"
                        middleName="JS"
                        rightName="XX"
                        navigator={true}
                        data={data} />
                </div>
            </div>
        </div>
    )
}
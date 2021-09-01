import '../styles/DashboardGraph.css'
import {useState} from 'react';
import { XAxis, YAxis, CartesianGrid, LineChart, Line, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';

export default function DashboardGraph({dataOne, dataTwo}) {
    const [chartType, setChartType] = useState(0)
    const [data, setData] = useState(dataOne)

    const useDataOne = () => {
        setData(dataOne)
    }

    const useDataTwo = () => {
        setData(dataTwo)
    }

    const useLineChart = () => {
        setChartType(0)
    }

    const useAreaChart = () => {
        setChartType(1)
    }



    if(chartType === 0){
        return (
            <div className="DashboardGraph">
                <div className="DashboardGraphTopbar">
                    <div className="DashboardGraphTopbarLeftSection">
                        <button 
                            className="DashboardGraphButtonLeft"
                            onClick={useDataOne}>
                                7 days
                        </button>
                        <button 
                            className="DashboardGraphButtonLeft"
                            onClick={useDataTwo}>
                                14 days
                        </button>
                        <button 
                            className="DashboardGraphButtonLeft"
                            onClick={useDataOne}>
                                30 days
                        </button>
                    </div>
                    <div className="DashboardGraphTopbarRightSection">
                        <button 
                            className="DashboardGraphButtonRight"
                            onClick={useLineChart}>
                                Line
                        </button>
                        <button 
                            className="DashboardGraphButtonRight"
                            onClick={useAreaChart}>
                                Area
                        </button>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={275}>
                    <LineChart data={data}
                        margin={{
                            top: 25,
                            bottom: 0,
                            right: 35,
                            left: 0
                        }}>

                        <CartesianGrid strokeDasharray="3 3" stroke="#474747" />

                        <XAxis
                            dataKey="name"
                            stroke="#474747"
                            tickLine={false}
                            tickFormatter={(str) => {
                                const date = parseISO(str)

                                //Check if day is multiple of 7.
                                if (date.getDate() % 7 === 0) {
                                    return format(date, "MMM, d")
                                }
                                return "";
                            }} />

                        <YAxis
                            stroke="#474747"
                            tickLine={false} />

                        <Line dataKey="uv" stroke="#b661e9" />
                        <Line dataKey="pv" stroke="#dd53ca" />

                        <Tooltip content={<CustomToolTip />} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }else{
        return (
            <div className="DashboardGraph">
                <div className="DashboardGraphTopbar">
                    <div className="DashboardGraphTopbarLeftSection">
                        <button 
                            className="DashboardGraphButtonLeft"
                            onClick={useDataOne}>
                                7 days
                        </button>
                        <button 
                            className="DashboardGraphButtonLeft"
                            onClick={useDataTwo}>
                                14 days
                        </button>
                        <button 
                            className="DashboardGraphButtonLeft"
                            onClick={useDataOne}>
                                30 days
                        </button>
                    </div>
                    <div className="DashboardGraphTopbarRightSection">
                        <button 
                            className="DashboardGraphButtonRight"
                            onClick={useLineChart}>
                                Line
                        </button>
                        <button 
                            className="DashboardGraphButtonRight"
                            onClick={useAreaChart}>
                                Area
                        </button>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={275}>
                    <AreaChart data={data}
                        margin={{
                            top: 25,
                            bottom: 0,
                            right: 35,
                            left: 0
                        }}>
                        
                        <defs>
                            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#b661e9" stopOpacity={0.7} />
                                <stop offset="75%" stopColor="#b661e9" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#dd53ca" stopOpacity={0.7} />
                                <stop offset="75%" stopColor="#dd53ca" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="#474747" />

                        <XAxis
                            dataKey="name"
                            stroke="#474747"
                            tickLine={false}
                            tickFormatter={(str) => {
                                const date = parseISO(str)

                                //Check if day is multiple of 7.
                                if (date.getDate() % 7 === 0) {
                                    return format(date, "MMM, d")
                                }
                                return "";
                            }} />

                        <YAxis
                            stroke="#474747"
                            tickLine={false} />

                        <Area dataKey="pv" stroke="#b661e9" fill="url(#color1)"/>
                        <Area dataKey="uv" stroke="#dd53ca" fill="url(#color2)"/>

                        <Tooltip content={<CustomToolTip />} />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
        )
    }

    function CustomToolTip({ active, payload, label }) {
        if (active) {
            return (
                <div className='ToolTip'>
                    <h4>
                        {format(parseISO(label), "eeee, d MMM, yyyy")}
                    </h4>
                    <p>
                        R{payload[0].value.toFixed(2)} ZAR
                    </p>
                </div>
            )
        }
        return null;
    }
}
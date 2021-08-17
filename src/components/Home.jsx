import '../styles/Home.css'
import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';

import data from '../data.js'

export default function Home() {
    return (
        <div className='Home'>
            <div className="MainChartContainer">
                <div className="MainChartHeaderContainer">
                    <div className="HeaderContainer">
                        <label className='ChartNameLabel'>Main Chart</label>
                        <label className='ChartTypeLabel'>Revenue</label>
                    </div>
                    <div className="ChartTypeNavigator">
                        <button className="LeftChartButton">Left</button>
                        <button className="MiddleChartButton">Middle</button>
                        <button className="RightChartButton">Right</button>
                    </div>
                </div>

                <ResponsiveContainer width='100%' height={300}>
                    <AreaChart data={data} margin={{
                        top: 5,
                        right: 45,
                        left: 40,
                        bottom: 5,
                    }}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#dd53ca" stopOpacity={0.7} />
                                <stop offset="75%" stopColor="#b661e9" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>

                        <Area dataKey="uv" stroke="#dd53ca" fill="url(#color)" />

                        <XAxis dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(str) => {
                                const date = parseISO(str)

                                //Check if day is multiple of 7.
                                if (date.getDate() % 7 === 0) {
                                    return format(date, "MMM, d")
                                }
                                return "";
                            }}
                        />

                        <YAxis
                            dataKey="uv"
                            axisLine={false}
                            tickLine={false}
                            tickCount={8}
                            tickFormatter={(number) => `$${number.toFixed(2)}`}
                        />

                        <Tooltip content={<CustomToolTip />} />

                        <CartesianGrid opacity="0.1" vertical={false} />
                    </AreaChart>
                </ResponsiveContainer>

            </div>
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
                    ${payload[0].value.toFixed(2)} CAD
                </p>
            </div>
        )
    }
    return null;
}

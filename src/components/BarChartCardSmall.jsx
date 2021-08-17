import '../styles/BarChartCardSmall.css'
import ChartCardHeaderSmall from './ChartCardHeaderSmall'
import { XAxis, YAxis, CartesianGrid, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';


export default function BarChartCardSmall({ heading, label, leftName, middleName, rightName, data }) {
    return (
        <div className="BarChartCardSmall">
            <ChartCardHeaderSmall
                heading={heading}
                label={label}
                leftName={leftName}
                middleName={middleName}
                rightName={rightName}
                navigator={false} />

            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    margin={{
                        top: 0,
                        bottom: 0,
                        right: 10,
                        left: 0
                    }}>

                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#dd53ca" stopOpacity={0.7} />
                            <stop offset="75%" stopColor="#b661e9" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>

                    <XAxis dataKey="name"
                        tickFormatter={(str) => {
                            const date = parseISO(str)

                            //Check if day is multiple of 7.
                            if (date.getDate() % 1 === 0) {
                                return format(date, "MM-d")
                            }
                            return "";
                        }} />

                    <YAxis
                        dataKey="uv"
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        tickFormatter={(number) => `$${number / 100}`}
                    />

                    <Bar dataKey="uv" fill="url(#color)" opacity={0.8} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

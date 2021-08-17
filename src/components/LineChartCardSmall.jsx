import '../styles/LineChartCardSmall.css'
import ChartCardHeaderSmall from './ChartCardHeaderSmall'
import { XAxis, YAxis, CartesianGrid, LineChart, Line, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';

export default function LineChartCardSmall({ heading, label, leftName, middleName, rightName, navigator, data }) {
    if (navigator) {
        return (
            <div className="LineChartCardSmall">
                <ChartCardHeaderSmall
                    heading={heading}
                    label={label}
                    leftName={leftName}
                    middleName={middleName}
                    rightName={rightName}
                    navigator={true} />

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}
                        margin={{
                            top: 5,
                            bottom: 5,
                            right: 15,
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

                        <Line dataKey="pv" stroke="#b661e9" />
                        <Line dataKey="uv" stroke="#dd53ca" />
                    </LineChart>
                </ResponsiveContainer>
            </div >
        )
    } else {
        return (
            <div className="LineChartCardSmall">
                <ChartCardHeaderSmall
                    heading={heading}
                    label={label}
                    leftName={leftName}
                    middleName={middleName}
                    rightName={rightName}
                    navigator={false} />

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}
                        margin={{
                            top: 5,
                            bottom: 5,
                            right: 15,
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

                        <Line dataKey="pv" stroke="#b661e9" />
                        <Line dataKey="uv" stroke="#dd53ca" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}



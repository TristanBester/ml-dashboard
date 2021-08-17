import '../styles/AreaChartCardLarge.css'
import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';


export default function AreaChartCardLarge({ heading, label, leftName, middleName, rightName, data }) {
    return (
        <div>
            <div className="AreaChartHeaderContainer">
                <div className="HeaderContainerLarge">
                    <label className='ChartNameLabelLarge'>Main Chart</label>
                    <label className='ChartTypeLabelLarge'>Revenue</label>
                </div>
                <div className="ChartTypeNavigatorLarge">
                    <button className="LeftChartButtonLarge">Left</button>
                    <button className="MiddleChartButtonLarge">Middle</button>
                    <button className="RightChartButtonLarge">Right</button>
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

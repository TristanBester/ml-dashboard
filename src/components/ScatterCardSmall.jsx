import '../styles/ScatterCardSmall.css'
import { XAxis, YAxis, ZAxis, CartesianGrid, ScatterChart, Scatter, ResponsiveContainer, Legend } from 'recharts';
import { format, parseISO } from 'date-fns';
import ChartCardHeaderSmall from './ChartCardHeaderSmall';

export default function ScatterCardSmall({ heading, label, dataOne, dataTwo }) {
    return (
        <div className="ScatterCardSmall">
            <ChartCardHeaderSmall
                heading={heading}
                label={label}
                navigator={false} />

            <ResponsiveContainer width="100%" height={300}>
                <ScatterChart
                    margin={{
                        top: 10,
                        bottom: 0,
                        right: 10,
                        left: 0
                    }}>

                    <CartesianGrid strokeDasharray="3 3" stroke="#474747" />
                    <XAxis stroke="#474747" dataKey="x" name="stature" unit="cm" />
                    <YAxis stroke="#474747" dataKey="y" name="weight" unit="kg" />
                    <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
                    <Legend />
                    <Scatter name="A school" data={dataOne} fill="#b661e9" />
                    <Scatter name="B school" data={dataTwo} fill="#dd53ca" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}
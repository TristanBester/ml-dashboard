import '../styles/DashboardGraph.css'
import {useState} from 'react';
import { XAxis, YAxis, CartesianGrid, LineChart, Line, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';

export default function DashboardGraph({dataOne, dataTwo}) {
    const [data, setData] = useState(dataOne)

    






}



// const [data, setData] = useState(dataOne)
// const [statisticOne, setStatisticOne] = useState(optionOne)
// const [statisticTwo, setStatisticTwo] = useState(optionTwo)
// const [chartType, setChartType] = useState(0)

// const useDataOne = () =>{
//     setData(dataOne)
// }

// const useDataTwo = () => {
//     setData(dataTwo)
// }

// const useStatisticOne = () => {
//     setStatisticOne(optionOne)
//     setStatisticTwo(optionTwo)
// } 

// const useStatisticTwo = () => {
//     setStatisticOne(optionTwo)
//     setStatisticTwo(optionOne)
// }

// const useLineChart = () => {
//     setChartType(0)
// }

// const useAreaChart = () => {
//     setChartType(1)
// }


// if(chartType == 0){
//     return (
//         <div className="DashboardGraph">
//             <p>Statistic: {statisticOne}</p>
//             <p>Dataset: {(data == dataOne) ? "one" : "two" }</p>
//             <button onClick={useStatisticOne}>{optionOne}</button>
//             <button onClick={useStatisticTwo}>{optionTwo}</button>
//             <button onClick={useDataOne}>Dataset one</button>
//             <button onClick={useDataTwo}>Dataset two</button>
//             <button onClick={useLineChart}>Line chart</button>
//             <button onClick={useAreaChart}>Area chart</button>
//             <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={data}
//                     margin={{
//                         top: 5,
//                         bottom: 5,
//                         right: 30,
//                         left: 0
//                     }}>

//                     <CartesianGrid strokeDasharray="3 3" stroke="#474747" />

//                     <XAxis
//                         dataKey="name"
//                         stroke="#474747"
//                         tickLine={false}
//                         tickFormatter={(str) => {
//                             const date = parseISO(str)

//                             //Check if day is multiple of 7.
//                             if (date.getDate() % 7 === 0) {
//                                 return format(date, "MMM, d")
//                             }
//                             return "";
//                         }} />

//                     <YAxis
//                         stroke="#474747"
//                         tickLine={false} />

//                     <Line dataKey={statisticOne} stroke="#b661e9" />
//                     <Line dataKey={statisticTwo} stroke="#dd53ca" />
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     )
// }else{
//     return (
//         <div className="DashboardGraph">
//             <p>Statistic: {statisticOne}</p>
//             <p>Dataset: {(data == dataOne) ? "one" : "two" }</p>
//             <button onClick={useStatisticOne}>{optionOne}</button>
//             <button onClick={useStatisticTwo}>{optionTwo}</button>
//             <button onClick={useDataOne}>Dataset one</button>
//             <button onClick={useDataTwo}>Dataset two</button>
//             <button onClick={useLineChart}>Line chart</button>
//             <button onClick={useAreaChart}>Area chart</button>
//             <ResponsiveContainer width="100%" height={300}>
//                 <AreaChart data={data}
//                     margin={{
//                         top: 5,
//                         bottom: 5,
//                         right: 30,
//                         left: 0
//                     }}>

//                     <CartesianGrid strokeDasharray="3 3" stroke="#474747" />

//                     <XAxis
//                         dataKey="name"
//                         stroke="#474747"
//                         tickLine={false}
//                         tickFormatter={(str) => {
//                             const date = parseISO(str)

//                             //Check if day is multiple of 7.
//                             if (date.getDate() % 7 === 0) {
//                                 return format(date, "MMM, d")
//                             }
//                             return "";
//                         }} />

//                     <YAxis
//                         stroke="#474747"
//                         tickLine={false} />

//                     <Area dataKey={statisticOne} fill={statisticOne == optionOne ? "#b661e9" : "#dd53ca"}/>
//                     <Area dataKey={statisticTwo} fill={statisticTwo == optionTwo ? "#dd53ca" : "#b661e9"} />
//                 </AreaChart>
//             </ResponsiveContainer>
//         </div>
//     )
// }
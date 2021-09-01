import "../styles/DashboardTable.css"
import { DataGrid } from '@mui/x-data-grid';
import Button from '@material-ui/core/Button';
import { tableData } from "../data";
import { Link } from 'react-router-dom'
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";


export default function DashboardTable() {

    const columns = [
        {
            field: "feature",
            headerName: "Feature",
            width:170,
            headerAlign: 'center',
            headerClassName: 'TestClass',
            renderCell: (params) => (
                <div className='DashboardTableCell'>
                    {params.value}
                </div>
            )
        },
        {
            field: "KS",
            headerName: "KS Distance",
            width:170,
            headerClassName: 'TestClass',
            headerAlign: 'center',
            renderCell: (params) => (
                <div className="DashboardTableNumber">
                    {params.value}
                </div>
            )
        },
        {  
            field: "JS",
            headerName: "JS Divergence",
            width:175,
            headerClassName: 'TestClass',
            headerAlign: 'center',
            renderCell: (params) => (
                <div className="DashboardTableNumber">
                    {params.value}
                </div>
            )
        },
        {
            field: 'id',
            headerName: 'Expand',
            headerAlign: 'center',
            headerClassName: 'TestClass',
            width: 130,
            renderCell: (params) => (
                <strong>
                    <Link to={'/feature/' + params.value}>
                        <button
                            className="DashboardTableButton"
                        >
                            {params.value}
                        </button>
                    </Link>
                </strong>
            ),
        },
    ];


    const theme = createTheme({
        palette: {
          primary: {
            main: "#b661e9"
          }
        }
      })

    return (
        <div className="DashboardTable">
            <MuiThemeProvider theme={theme}>
                <DataGrid
                    rows={tableData}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={6}
                />
            </MuiThemeProvider>
        </div>
    )
}


import { AgGridReact } from 'ag-grid-react';
import { useState,useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


function Grid()
{
    const [rowData, setRowData] = useState();

    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
      }, []);

      useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
      }, []);
      
    
    const [columnDefs] = useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ])

 return  <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
 <AgGridReact
     rowData={rowData}
     columnDefs={columnDefs}>
 </AgGridReact>
</div>
}

export default Grid


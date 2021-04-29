import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useInput } from './useInput';

const Table = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const { value, bind, reset } = useInput('');
    const [rowData, setRowData] = useState([
        { date: "02/02/2021" , produced: 10, sold: 5, current: 12 },
    ]);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${value}`);
        reset();
    }
    const add = () => {
        // <AddField />
        // totalProduced += produced;
        // totalSold += sold;
        // stock = totalproduced - totalSold;
        // let data = {
        //     date: date,
        //     produced: produced,
        //     sold: sold,
        //     stock: stock
        // }
        // array.push;
    }
    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
                <AgGridReact
                    rowData={rowData}>
                    <AgGridColumn field="date"></AgGridColumn>
                    <AgGridColumn field="produced"></AgGridColumn>
                    <AgGridColumn field="sold"></AgGridColumn>
                    <AgGridColumn field="stock"></AgGridColumn>
                </AgGridReact>
            </div>
            Date: <input type="date"/><br/>
            Produced: <input type="number"/><br/>
            Sold: <input type="number"/><br/>
            Stock: <input type="number"/><br/>
            <button onClick={add()}>Add</button>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" {...bind} />
              </label>
              <label>
                password
                <input type="password" {...bind} />
              </label>
              <input type="submit" value="Submit" />
            </form>
        </div>
        
    );
};

export default Table;
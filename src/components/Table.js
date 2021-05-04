import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = (props) => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    // const rowData = [
    //         {make: "Toyota", model: "Celica", price: 35000},
    //         {make: "Ford", model: "Mondeo", price: 32000},
    //         {make: "Porsche", model: "Boxter", price: 72000}
    //       ];
        
    const [rowData, setRowData] = useState(props.record);

    const { id } = props;

    useEffect(() => {
        setRowData(props.record)
        fetch(`http://localhost:3003/product/${id}`)
        .then(result => result.json())
        .then(rowData => setRowData(rowData.record))
    }, [id]);

    const [date, setDate] = useState("");
    const [produced, setProduced] = useState("");
    const [sold, setSold] = useState("");
    const [stock, setStock] = useState("");

    const handleSubmit = (evt) => {
        // evt.preventDefault();
        console.log(`Submitting  ${date}`)
        console.log(`Submitting  ${produced}`)
        console.log(`Submitting  ${sold}`)
        let stock = produced - sold;
        let totalProduced;
        let totalSold;
        totalProduced += produced;
        totalSold += sold;
        fetch(`http://localhost:3003/updateRecord/${props.id}`, {
            method: "POST",
            body: JSON.stringify({ date , produced, sold, stock}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));
        if(rowData.length === 0) {
            setRowData([{ date , produced, sold, stock}]);
        }
        else
            setRowData( arr => [...arr, { date , produced, sold, stock}]);
        console.log(rowData)
        // DAte produced Sold Stock
    }
    console.log(props.record)
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
            <form className="addProductForm" onSubmit={handleSubmit}>
                <label>
                    Date:
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                </label>
                <br />
                <label>
                    Produced:
                <input
                    type="number"
                    value={produced}
                    onChange={e => setProduced(e.target.value)}
                />
                </label>
                <br />
                <label>
                    Sold:
                <input
                    type="number"
                    value={sold}
                    onChange={e => setSold(e.target.value)}
                />
                </label>
                <br />
                <input type="submit" value="Add Product" />
            </form>
        </div>
        
    );
};

export default Table;
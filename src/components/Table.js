import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './Table.css'

const Table = (props) => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    // const rowData = [
    //         {make: "Toyota", model: "Celica", price: 35000},
    //         {make: "Ford", model: "Mondeo", price: 32000},
    //         {make: "Porsche", model: "Boxter", price: 72000}
    //       ];
        
    const [rowData, setRowData] = useState();

    const { id } = props;

    useEffect(() => {
        setRowData(props.record)
        fetch(`https://quiet-taiga-70836.herokuapp.com/getRecord/${id}`)
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
    }, [id]);
    console.log(rowData)
    const [date, setDate] = useState("");
    const [produced, setProduced] = useState("");
    const [sold, setSold] = useState("");
    const [stock, setStock] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Submitting  ${date}`)
        console.log(`Submitting  ${produced}`)
        console.log(`Submitting  ${sold}`)
        fetch(`https://quiet-taiga-70836.herokuapp.com/updateRecord/${props.id}`, {
            method: "POST",
            body: JSON.stringify({ date, produced, sold, stock}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(rowData => setRowData(rowData));
    }
    console.log(props.record)
    return (
        <div className="table">
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
                <label className="formLabel">
                    Date:
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                </label>
                <label className="formLabel">
                    Produced:
                <input
                    type="number"
                    value={produced}
                    onChange={e => setProduced(e.target.value)}
                />
                </label>
                <label className="formLabel">
                    Sold:
                <input
                    type="number"
                    value={sold}
                    onChange={e => setSold(e.target.value)}
                />
                </label>
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default Table;
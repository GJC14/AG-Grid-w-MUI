import { useState, useEffect, useMemo } from 'react'

import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

// Custom Cell Renderer (Display logos based on cell value)
const CompanyLogoRenderer = ({ value }) => (
  <span style={{ display: "flex", height: "100%", width: "100%", alignItems: "center" }}>{value && <img alt={`${value} Flag`} src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`} style={{display: "block", width: "25px", height: "auto", maxHeight: "50%", marginRight: "12px", filter: "brightness(1.1)"}} />}<p style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{value}</p></span>
);

/* Custom Cell Renderer (Display tick / cross in 'Successful' column) */
const MissionResultRenderer = ({ value }) => (
  <span style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "center"}}>{<img alt={`${value}`} src={`https://www.ag-grid.com/example-assets/icons/${value ? 'tick-in-circle' : 'cross-in-circle'}.png`} style={{width: "auto", height: "auto"}} />}</span>
);

/* Format Date Cells */
const dateFormatter = (params) => {
  return new Date(params.value).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

function Grid() {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { checkboxSelection: true,
      headerCheckboxSelection: true,
      maxWidth: 100,
      resizable: false,
    },
    { field: "mission" },
    { field: "company",
      // Add component to column via cellRenderer
      cellRenderer: CompanyLogoRenderer 
    },
    { field: "location" },
    { field: "date",
      valueFormatter: dateFormatter
    },
    { field: "price",
      // Return a formatted string for this column
      valueFormatter: params => { return '£' + params.value.toLocaleString(); }
    },
    { field: "successful",
      cellRenderer: MissionResultRenderer,
      width: 150,
    },
    { field: "rocket" }
  ]);

  // Apply settings across all columns
  const defaultColDef = useMemo(() => ({
    filter: true,
    editable: true,
  }))

  // Fetch data & update rowData state
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
      .then(result => result.json()) // Convert to JSON
      .then(rowData => setRowData(rowData)) // Update state of `rowData`
  }, [])

  return (
    <>
    {/* Container with theme & dimensions */}
    <div className="ag-theme-quartz" style={{ height: 500, width: 1280 }}>
      {/* The AG Grid component */}
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        pagination={true}
        paginationPageSize={20}
        onSelectionChanged={event => console.log('Row Selected!')}
        onCellValueChanged={event => console.log(`New Cell Value: ${event.value}`)}
      />
    </div>
    </>
  )
}

export default Grid

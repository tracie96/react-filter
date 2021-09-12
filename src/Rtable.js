import React from "react";
import { Table } from "react-bootstrap";
import { useTable, useSortBy, useFilters } from "react-table";
import CustomInput from "./DataForm";

window.Date.prototype.isValid = function() {

  return this.getTime() === this.getTime();
};

const ColumnFilter = ({ column: { filterValue, setFilter, filter } }) => {
  return (
    <CustomInput
      value={filterValue || ""}
      onChange={e => {
        setFilter(e.target.value || undefined); 
      }}
      placeholder={`Filter ${filter ? filter : ""}...`}
    />
  );
};


const ReactTable = ({ columns, data }) => {
  const filterTypes = {
    year: (rows, id, filterValue) => {
      return rows.filter(row => {
        const rowValue = row.values[id];
        return rowValue !== undefined &&
          Number(filterValue) &&
          new Date(rowValue) &&
          new Date(rowValue).isValid()
          ? new Date(rowValue).getFullYear() === Number(filterValue)
          : true;
      });
    },
    text: (rows, id, filterValue) => {
      return rows.filter(row => {
        const rowValue = row.values[id];
        return rowValue !== undefined
          ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
          : true;
      });
    }
  };
  const defaultColumn = {
    Filter: ColumnFilter
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes
    },
    // hook for filters
    useFilters,
    useSortBy
  );
  console.log(defaultColumn);
  return (
    <Table bordered {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => {
              const {
                render,
                getHeaderProps,
                isSorted,
                isSortedDesc,
                getSortByToggleProps,
                canFilter
              } = column;
              const extraClass = isSorted
                ? isSortedDesc
                  ? "desc"
                  : "asc"
                : "";
              return (
                <th
                  key={`th-${i}`}
                  className={extraClass}
                >
                  <div {...getHeaderProps(getSortByToggleProps())}>
                    {render("Header")}
                  </div>
                  {/* Render the columns filter UI */}
                  <div>{canFilter ? render("Filter") : null}</div>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ReactTable;

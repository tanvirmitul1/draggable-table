/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

import { data } from "../constants/data";
import Modal from "./Modal";

const PrimaryTable = () => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedCellData, setSelectedCellData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: "projectManager",
        header: "Project Manager",
      },
      {
        accessorKey: "numberOfProjects",
        header: "No. of Project",
        Cell: ({ cell }) => (
          <a
            style={{
              color: "red",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            {cell.row.original.numberOfProjects}
          </a>
        ),
      },

      {
        accessorKey: "totalProjectValue",
        header: "Total Project Value",
        Cell: ({ cell }) => (
          <a
            style={{
              color: "red",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            {cell.row.original.totalProjectValue}
          </a>
        ),
      },
      {
        accessorKey: "totalReleasedAmount",
        header: "Total Released Amount",
        Cell: ({ cell }) => (
          <a
            style={{
              color: "red",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            {cell.row.original.totalReleasedAmount}
          </a>
        ),
      },
      {
        accessorKey: "numberOfFullyCompletedProjects",
        header: "No. of Fully Completed Project",
      },
      {
        accessorKey: "milestoneCompletionRate",
        header: "MILESTONE COMPLETION RATE",
        Cell: ({ cell }) => (
          <a
            style={{
              color: "red",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            {cell.row.original.milestoneCompletionRate}
          </a>
        ),
      },
      {
        accessorKey: "averageProjectCompletionTime",
        header: "AVERAGE PROJECT COMPLETION TIME",
        Cell: ({ cell }) => (
          <a
            style={{
              color: "red",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            {cell.row.original.averageProjectCompletionTime}
          </a>
        ),
      },

      {
        accessorKey: "projectCompletionRate",
        header: "Project Completion Rate",
        Cell: ({ cell }) => (
          <a
            style={{
              color: "red",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            {cell.row.original.projectCompletionRate}
          </a>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,

    enableColumnOrdering: true,
    enableColumnActions: false,
    enableDensityToggle: false,
    enableGlobalFilter: false,
    enableGlobalFilterModes: false,
    manualFiltering: false,
    // enableFullScreenToggle: false,
    enableFilters: false,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => handleRowClick(row.original),
      sx: {
        cursor: "pointer",
      },
    }),

    muiTableBodyProps: {
      sx: {
        "& tr:nth-of-type(odd) > td": {
          backgroundColor: "#DAEFF1",
        },
        "& tr:nth-of-type(even) > td": {
          backgroundColor: "#FFFFFF",
        },
      },
    },

    muiTableHeadCellProps: {
      sx: {
        backgroundColor: "#327A81",
        color: "#FFFFFF",
      },
    },

    muiTableBodyCellProps: ({ cell, column, row, table }) => ({
      onClick: () => handleCellClick(cell),
      sx: {
        cursor: "pointer",
      },
    }),
  });

  const handleCellClick = (cellData) => {
    setSelectedCellData(cellData);
    setIsModalOpen(true);
  };

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRowData(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <MaterialReactTable table={table} />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        selectedRowData={selectedRowData}
        handleCloseModal={handleCloseModal}
        selectedCellData={selectedCellData}
      />
    </div>
  );
};

export default PrimaryTable;

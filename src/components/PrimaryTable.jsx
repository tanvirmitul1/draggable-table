import  { useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

import { data } from '../constants/data';
import Modal from './Modal';



const PrimaryTable = () => {
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const columns = useMemo(
        () => [
            {
                accessorKey: 'numberOfProjects',
                header: 'No. of Project',
                enableHiding:true,
            },
            {
                accessorKey: 'projectManager',
                header: 'Project Manager',
            },
            {
                accessorKey: 'totalProjectValue',
                header: 'Total Project Value',
            },
            {
                accessorKey: 'totalReleasedAmount',
                header: 'Total Released Amount',
            },
            {
                accessorKey: 'numberOfFullyCompletedProjects',
                header: 'No. of Fully Completed Project',
            },
            {
                accessorKey: 'numberOfCompletedProjectsWithoutAuthorization',
                header: 'No of Completed Projects Without Authorization',
            },
            {
                accessorKey: 'projectCompletionRate',
                header: 'Project Completion Rate',
            },
            {
                accessorKey: 'projectsDetails',
                header: 'Project Details',
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data,
        initialState:{columnVisibility:{projectsDetails:false}},
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
                cursor: 'pointer',
            },
        }),
    });

    const handleRowClick = (rowData) => {
        setSelectedRowData(rowData);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedRowData(null);
        setIsModalOpen(false);
    };

    return (
        <div >
            <MaterialReactTable table={table} />

           
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Row Details"
                selectedRowData={selectedRowData}
                handleCloseModal={handleCloseModal}
            />
        </div>
    );
};

export default PrimaryTable;

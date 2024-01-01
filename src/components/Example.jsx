import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import { data } from '../constants/data';


const Example = () => {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'numberOfProjects',
                header: 'No. of Project',
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
                header: 'Project Completioon Rate',
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data,
        enableColumnOrdering: true,
        enableColumnActions:false,
        enableDensityToggle: false,
        enableGlobalFilter:false,
        enableGlobalFilterModes:false,
        manualFiltering:false,
        enableFullScreenToggle:false,
        enableFilters:false,

    });

    return <MaterialReactTable table={table} />;
};

export default Example;

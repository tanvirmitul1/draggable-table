/* eslint-disable react/prop-types */
import { MaterialReactTable , useMaterialReactTable } from "material-react-table";
import { useMemo } from "react";
const SecondaryTable = ({ selectedRowData }) => {
    console.log("project details", selectedRowData.projectsDetails);
    
    const projectDetails = selectedRowData.projectsDetails;
    const columns = useMemo(() =>
        [
            {
                accessorKey: 'slNo',
                header: 'Sl. No',
                
            },
            {
                accessorKey: 'projectName',
                header: 'Project Name',

            },
            {
                accessorKey: 'client',
                header: 'Client Name',

            },
            {
                accessorKey: 'projectValue',
                header: 'Project Value',

            },
            {
                accessorKey: 'dealClosedBy',
                header: 'Deal closed By',

            },
            {
                accessorKey: 'estimatedHours',
                header: 'Estimated Hours',  

            },
            {
                accessorKey: 'freelanceComMessagePageLink',
                header: 'Freelancer.com Message Page Link',
                Cell: ({ cell }) => (
                    <a href={cell.row.original.freelanceComMessagePageLink} style={{ backgroundColor: "gray", textDecoration: 'none', color: 'white',padding:"15px" }}>
                        {"Visit Link"}
                    </a>
                ),

            },
           
           
        ],[])

    const table = useMaterialReactTable({
        columns,
        data:projectDetails
        ,
        enableColumnOrdering: true,
        enableColumnActions: false,
        enableDensityToggle: false,
        enableGlobalFilter: false,
        enableGlobalFilterModes: false,
        manualFiltering: false,
        
        enableFilters: false,
       
    });


    return (

       
       
        <div>

            <MaterialReactTable table={table} />
            
        </div>
    );
};



export default SecondaryTable
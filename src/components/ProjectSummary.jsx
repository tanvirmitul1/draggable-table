import { data } from "../constants/data";


const ProjectSummary = () => {
    
    const totalProjects = data.reduce((acc, project) => acc + project.numberOfProjects, 0);
    const totalProjectValue = data.reduce((acc, project) => acc + project.totalProjectValue, 0);

   
    const formattedTotalProjectValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalProjectValue);

    return (
        <div >
            <p className="font-roboto">Total Projects: {totalProjects}</p>
            <p>Total Project Value: {formattedTotalProjectValue}</p>
        </div>
    );
};

export default ProjectSummary;

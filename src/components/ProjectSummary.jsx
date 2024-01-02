import { data } from "../constants/data";


const ProjectSummary = () => {
    
    const totalProjects = data.reduce((acc, project) => acc + project.numberOfProjects, 0);
    const totalProjectValue = data.reduce((acc, project) => acc + project.totalProjectValue, 0);

   
    const formattedTotalProjectValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalProjectValue);

    return (
        <div style={{ fontWeight: "bold",fontSize:'30px' }} >
            <div className="font-roboto " 
            ><span
                    style={{ color: "#0B4D54" }}>Total Projects:</span> <span
                    style={{ color: "#387E85" }}>{totalProjects}</span></div>
            <div><span
                style={{ color: "#0B4D54" }}>Total Project Value:</span><span style={{ color: "#387E85" }}> {formattedTotalProjectValue}</span></div>
        </div>
    );
};

export default ProjectSummary;

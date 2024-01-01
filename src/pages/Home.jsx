/** @format */

import Example from "../components/Example";
import MonthSelector from "../components/MonthPicker";
import ProjectSummary from "../components/ProjectSummary";

const Home = () => {
  return (
    <div style = {{display:"flex", flexDirection:"column",  alignItems:"center" }}>
      <div >

      <ProjectSummary />
      </div>
      <div style={{ display: "flex", flexDirection:"column", alignItems: "left" , gap:'20px'}}>
        <MonthSelector />
        <Example />
      </div>
    
    </div>
  );
};

export default Home;

/** @format */


import MonthSelector from "../components/MonthPicker";
import PrimaryTable from "../components/PrimaryTable";
import ProjectSummary from "../components/ProjectSummary";

const Home = () => {
  return (
    <div style = {{display:"flex", flexDirection:"column", maxWidth:"80%", margin:"0 auto" }}>
      <div >

      <ProjectSummary />
      </div>
      <div style={{ display: "flex", flexDirection:"column", alignItems: "left" , gap:'20px'}}>
        <MonthSelector />
        <PrimaryTable/>
      </div>
    
    </div>
  );
};

export default Home;

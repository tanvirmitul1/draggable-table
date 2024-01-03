import MonthSelector from "../components/MonthPicker";
import PrimaryTable from "../components/PrimaryTable";
import ProjectSummary from "../components/ProjectSummary";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        padding: "40px",
        backgroundColor: "white",
        borderRadius: "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ margin: "0 auto" }}>
          <ProjectSummary />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <MonthSelector />
          </div>
          <div>
            <PrimaryTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

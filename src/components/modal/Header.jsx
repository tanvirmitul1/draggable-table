/* eslint-disable react/prop-types */


const Header = ({selectedRowData}) => {
  return (
    <div style={{ fontWeight: "bold", fontSize: '30px' }}>
      <div> <span style={{ color: "#0B4D54" }}>Project Manager:</span><span style={{ color: "#387E85" }}>{` ${selectedRowData.projectManager}`}</span></div>
      <div> <span style={{ color: "#0B4D54" }}>Total Projects:</span> <span style={{ color: "#387E85" }}> {` ${selectedRowData.numberOfProjects}`}</span></div>
      <div> <span style={{ color: "#0B4D54" }}>Total Project Value:</span> <span style={{ color: "#387E85" }}>{` $${selectedRowData.totalProjectValue}`}</span></div>
    </div>
  )
}

export default Header

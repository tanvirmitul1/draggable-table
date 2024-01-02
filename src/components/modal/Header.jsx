/* eslint-disable react/prop-types */


const Header = ({selectedRowData}) => {
  return (
    <div>
          <h2>{`Project Manager: ${selectedRowData.projectManager}`}</h2>
          <p>{`Total Projects: ${selectedRowData.numberOfProjects}`}</p>
          <p>{`Total Project Value: ${selectedRowData.totalProjectValue}`}</p>
    </div>
  )
}

export default Header

/* eslint-disable react/prop-types */

const Managerdetails = ({selectedRowData}) => {
 
  return (
    <div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {Object.entries(selectedRowData).map(([key, value]) => (
                  <div key={key} style={{ marginRight: '10px', marginBottom: '10px' }}>
                      {key !== "projectsDetails" ? (
                          <div
                             
                              style={{
                                  padding: '10px',
                                  fontSize: '18px',
                                  backgroundColor:'#387E85',
                                  color:'white',
                                  cursor: 'pointer',
                                
                                  outline: "none",
                                  border: "none",
                                  width: '180px',
                                  height: '100px',
                                  transition: 'background-color 0.3s ease-in',
                                  display: 'flex',
                                  flexDirection: 'column',
                                 
                                  
                                 


                              }}
                          
                          >
                              <span style={{ wordWrap: "break-word",  }}>{`${key}:`}</span>
                              <span style={{margin:"0 auto", fontSize:"20px"}} >{`${value}`}</span>
                              
                          </div>
                      ) : null}
                  </div>
              ))}
          </div>
    </div>
  )
}

export default Managerdetails

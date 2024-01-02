/* eslint-disable react/prop-types */

const Managerdetails = ({selectedRowData}) => {
  return (
    <div>
          <h3>Row Details</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {Object.entries(selectedRowData).map(([key, value]) => (
                  <div key={key} style={{ marginRight: '10px', marginBottom: '10px' }}>
                      {key !== "projectsDetails" ? (
                          <button
                              style={{
                                  padding: '8px 12px',
                                  background: 'gray',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer',
                                  transition: 'background 0.3s',
                              }}
                          
                          >
                              {`${key}:${value}`}
                          </button>
                      ) : null}
                  </div>
              ))}
          </div>
    </div>
  )
}

export default Managerdetails

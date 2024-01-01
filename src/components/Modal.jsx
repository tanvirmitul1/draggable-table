/* eslint-disable react/prop-types */

import ReactModal from 'react-modal';

const Modal = ({ isOpen, onRequestClose, contentLabel, selectedRowData, handleCloseModal }) => {
    return (
        <ReactModal
            style={{
                overlay: {
                    zIndex: 1000,
                },
                content: {
                    zIndex: 1001,
                },
            }}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
        >
            <div>
                {selectedRowData && (
                    <div>
                        <h2>{`Project Manager: ${selectedRowData.projectManager}`}</h2>
                        <p>{`Total Projects: ${selectedRowData.numberOfProjects}`}</p>
                        <p>{`Total Project Value: ${selectedRowData.totalProjectValue}`}</p>
                        <hr />
                        <h3>Row Details</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {Object.entries(selectedRowData).map(([key, value]) => (
                                <div key={key} style={{ marginRight: '10px', marginBottom: '10px' }}>
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
                                        onMouseOver={(e) => e.target.style.background = '#45a049'}
                                        onMouseOut={(e) => e.target.style.background = '#4CAF50'}
                                    >
                                        {`${key}:${value}`}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                )}
                <button onClick={handleCloseModal}>Close</button>
            </div>
        </ReactModal>
    );
};

export default Modal;

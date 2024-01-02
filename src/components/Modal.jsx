/* eslint-disable react/prop-types */

import ReactModal from 'react-modal';
import SecondaryTable from './modal/SecondaryTable';
import Header from './modal/Header';
import Managerdetails from './modal/ManagerDetails';

const Modal = ({ isOpen, onRequestClose, contentLabel, selectedRowData, handleCloseModal }) => {
    console.log(selectedRowData);
    return (
        <ReactModal
            style={{
                overlay: {
                    zIndex: 1000,
                    maxWidth: '80%',
                    maxHeight: '80%',
                    margin: 'auto auto',
                    padding: '50px',
                },
                content: {
                    zIndex: 1001,
                    maxWidth: '70%',
                    maxHeight: '100%',
                    margin: 'auto auto',
                    padding: '50px',
                },
            }}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            
        >
            {selectedRowData && (
                <div>
                    <div>
                        <Header selectedRowData={selectedRowData} />
                        
                        <Managerdetails selectedRowData={selectedRowData} />
                    </div>
                    <button onClick={handleCloseModal}>Close</button>
                    <SecondaryTable selectedRowData={selectedRowData} />
                </div>
            )}
        </ReactModal>
    );
};

export default Modal;

/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import ReactModal from "react-modal";
import SecondaryTable from "./modal/SecondaryTable";
import Header from "./modal/Header";
import Managerdetails from "./modal/ManagerDetails";

const Modal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  selectedRowData,
  handleCloseModal,
}) => {
  console.log(selectedRowData);
  return (
    <ReactModal
      style={{
        overlay: {
          zIndex: 1000,
          backgroundColor: "rgba(0, 0, 0, 0.5)",

          margin: "auto auto",
          padding: "50px",
        },
        content: {
          zIndex: 1001,
          maxWidth: "80%",

          margin: "auto auto",
          padding: "50px",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}>
      {selectedRowData && (
        <div>
          <div>
            <div>
              <Header selectedRowData={selectedRowData} />
            </div>

            <div>
              <Managerdetails selectedRowData={selectedRowData} />
            </div>
          </div>
          <div>
            <button onClick={handleCloseModal}>Close</button>
          </div>
          <div>
            <SecondaryTable selectedRowData={selectedRowData} />
          </div>
        </div>
      )}
    </ReactModal>
  );
};

export default Modal;

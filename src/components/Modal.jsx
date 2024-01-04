/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import ReactModal from "react-modal";
import SecondaryTable from "./modal/SecondaryTable";
import Header from "./modal/Header";
import Managerdetails from "./modal/ManagerDetails";
import MonthSelector from "./MonthPicker";
import CloseButton from "./modal/CloseButton";

const Modal = ({
  isOpen,
  onRequestClose,

  selectedRowData,
  handleCloseModal,
  selectedCellData,
}) => {
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
          borderRadius: "20px",
          margin: "auto auto",
          padding: "50px",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      {selectedRowData && selectedCellData && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ margin: "0 auto" }}>
            <Header selectedRowData={selectedRowData} />
          </div>
          <div>
            <CloseButton handleCloseModal={handleCloseModal} />
          </div>

          <div>
            <Managerdetails
              selectedRowData={selectedRowData}
              selectedCellData={selectedCellData}
            />
          </div>

          <div>
            <MonthSelector />
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

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
import { IoMdClose } from "react-icons/io";
import ReactModal from "react-modal";
import SecondaryTable from "./modal/SecondaryTable";
import Header from "./modal/Header";
import Managerdetails from "./modal/ManagerDetails";
import MonthSelector from "./MonthPicker";

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
          borderRadius: "20px",
          margin: "auto auto",
          padding: "50px",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}>
      {selectedRowData && (
        <div style={{ display: "flex", flexDirection: "column", gap:"20px" }}>
          <div style={{ margin: "0 auto" }}>
            <Header selectedRowData={selectedRowData} />
          </div>
          <div
            style={{
              position: "absolute",
              right: "15px",
              top: "15px",
              backgroundColor: "#387E85",
              padding: "6px 6px 2px 6px",
              cursor: "pointer",
            }}>
            <div onClick={handleCloseModal}>
              <IoMdClose color='white' />
            </div>
          </div>

          <div>
            <Managerdetails selectedRowData={selectedRowData} />
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

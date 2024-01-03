/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

const CloseButton = ({handleCloseModal}) => {
  return (
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
  )
}

export default CloseButton

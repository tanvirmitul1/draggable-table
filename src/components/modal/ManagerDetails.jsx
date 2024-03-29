/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

import styles from "../../styles/ProjectDetails.module.css";
import { CellTrimmer, getIndexOfTrimCellId } from "../../lib/CellidTrimer";
const Managerdetails = ({ selectedRowData, selectedCellData }) => {
  const trimCellId = CellTrimmer(selectedCellData.id);
  const trimCellIdIndex = getIndexOfTrimCellId(trimCellId);
  const [activeIndex, setActiveIndex] = useState(trimCellIdIndex);
  console.log(
    "trimCellIdIndex",
    trimCellIdIndex,
    "          activeindex",
    activeIndex
  );
  const projectDetails = [
    { label: "NO OF PROJECT", value: selectedRowData.numberOfProjects },
    { label: "TOTAL PROJECT VALUE", value: selectedRowData.totalProjectValue },
    {
      label: "PROJECT COMPLETION RATE",
      value: selectedRowData.projectCompletionRate,
    },
    {
      label: "TOTAL RELEASED AMOUNT",
      value: selectedRowData.totalReleasedAmount,
    },
    {
      label: "MILESTONE COMPLETION RATE",
      value: selectedRowData.milestoneCompletionRate,
    },
    {
      label: "AVERAGE PROJECT COMPLETION TIME",
      value: selectedRowData.averageProjectCompletionTime,
    },
    { label: "CANCELATION RATE", value: selectedRowData.cancelationRate },
    { label: "CANCELED PROJECTS", value: selectedRowData.canceledProjects },
    { label: "DELAYED COMPLETED", value: selectedRowData.delayedCompleted },
    { label: "DELAYED PROJECTS", value: selectedRowData.delayedProjects },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    selectedCellData && (
      <div className={styles.projectDetailsContainer}>
        {projectDetails.map((detail, index) => (
          <div
            onClick={() => handleClick(index)}
            className={`${styles.projectDetailItem} ${
              activeIndex === index ? styles.activeItem : ""
            }`}
            key={index}
          >
            <span className={styles.projectDetailLabel}>{detail.label}</span>
            <span className={styles.projectDetailValue}>{detail.value}</span>
          </div>
        ))}
      </div>
    )
  );
};

export default Managerdetails;

export function CellTrimmer(variableName) {
  if (typeof variableName === "string" && variableName.length >= 2) {
    return variableName.slice(2);
  } else {
    return "Invalid input";
  }
}

export const getIndexOfTrimCellId = (trimCellId) => {
  switch (trimCellId) {
    case "numberOfProjects":
      return 0;
    case "projectManager":
      return 0;
    case "totalProjectValue":
      return 1;
    case "projectCompletionRate":
      return 2;
    case "totalReleasedAmount":
      return 3;
    case "milestoneCompletionRate":
      return 4;
    case "averageProjectCompletionTime":
      return 5;

    default:
      return 0;
  }
};

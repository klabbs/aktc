import React from "react";

const ClassesCard = ({ classData }) => {
  return (
    <div className="card">
      <h3>{classData?.name || "No Class Name"}</h3>
      <p>{classData?.description || "No Description"}</p>
    </div>
  );
};

export default ClassesCard;

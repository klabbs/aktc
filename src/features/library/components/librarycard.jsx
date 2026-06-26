import React from "react";

const LibraryCard = ({ item }) => {
  return (
    <div className="card">
      <h3>{item?.title || "No Title"}</h3>
      <p>{item?.author || "Unknown Author"}</p>
    </div>
  );
};

export default LibraryCard;

import React from "react";

const AnnouncementCard = ({ announcement }) => {
  return (
    <div className="card">
      <h3>{announcement?.title || "No Title"}</h3>
      <p>{announcement?.content || "No Content"}</p>
    </div>
  );
};

export default AnnouncementCard;

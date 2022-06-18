import React from "react";

const Rank = ({ user }) => {
    
  return (
    <div className="imageLinkForm">
      <div className="white f3">{`${user.name} your current entry count is...`}</div>
      <div className="white f3">{user.entries}</div>
    </div>
  );
};

export default Rank;

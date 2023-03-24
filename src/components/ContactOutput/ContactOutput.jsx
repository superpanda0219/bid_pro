import React from "react";

export const ContactOutput = ({ contact }) => {
  return (
    <div className={contact ? "card mt-3" : ""}>
      <p>{contact ? contact.name : ""}</p>
      <p>{contact ? contact.email : ""}</p>
      <p>{contact ? contact.phonenumber : ""}</p>
    </div>
  );
};

import React, { useState } from "react";

export const ContactInput = ({ addContact }) => {
  //** JavaScript */
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
  };
  //** JSX (HTML) */
  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div className="mt-1">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            name="name"
            value={contactInfo.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-1">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            value={contactInfo.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-1">
          <input
            type="number"
            placeholder="Phone Number"
            className="form-control"
            name="phonenumber"
            value={contactInfo.phonenumber}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-1">
          <button className="btn btn-primary">Submit Contact</button>
        </div>
      </form>
    </div>
  );
};

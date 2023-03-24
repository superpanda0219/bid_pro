import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ContactInput from "../../../components/ContactInput";
import ContactOutput from "../../../components/ContactOutput";
export const Forms = () => {
  /**
   * Hook
   */
  const [contactToDisplay, updateContact] = useState(null);

  /**
   * JavaScript
   */
  const addContact = (contact) => {
    updateContact(contact);
  };
  /**
   * JSX
   */
  return (
    <div className="container">
      <h1>Forms Example</h1>
      <ContactInput addContact={addContact} />
      <ContactOutput contact={contactToDisplay} />
      <Link to="/">Home</Link>
    </div>
  );
};

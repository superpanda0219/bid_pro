import React from "react";

/**
 * View component that displays the Hello Message and Version
 */

export function Jumbotron({ administration, version }) {
  return (
    <div className="row jumbotron mt-3">
      {administration}
      {version}
    </div>
  );
}

// How do i pass in prop types for these two objects?

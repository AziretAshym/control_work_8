import React from "react";

const Loader = () => {
  return (
    <>
      <div
        className="spinner-border text-primary position-absolute top-25 start-50 "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
};

export default Loader;

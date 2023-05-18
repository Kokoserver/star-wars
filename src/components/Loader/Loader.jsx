import React from "react";
import LoadingSpinner from "../../assets/icon/loader.svg";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loaderStyle">
      <img src={LoadingSpinner} alt="Loader" className="loader-logo" />
    </div>
  );
};

export default Loader;

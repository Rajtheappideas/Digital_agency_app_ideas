import React, { useState } from "react";

const ColorPalate = () => {
  const [showPalate, setshowPalate] = useState(false);
  return (
    <div className={`color-palate ${showPalate && "visible-palate"}`}>
      <div
        className="color-trigger"
        onClick={() => {
          setshowPalate(!showPalate);
        }}
      >
        <i className="fas fa-cog" />
      </div>
      <div className="color-palate-head">
        <h6>Choose Your Options</h6>
      </div>
      <h5>RTL Version</h5>
      <ul className="rtl-version option-box">
        <li className="rtl">RTL Version</li> <li>LTR Version</li>{" "}
      </ul>
      <h5>Boxed Version</h5>
      <ul className="box-version option-box">
        <li className="box">Boxed</li> <li>Full width</li>
      </ul>
      <h5>Want Sticky Header</h5>
      <ul className="header-version option-box">
        <li className="box">No</li> <li>Yes</li>
      </ul>
      <h5>Dark Verion</h5>
      <ul className="dark-version option-box">
        <li className="box">Yes</li> <li>No</li>
      </ul>
      <div className="palate-foo" />
    </div>
  );
};

export default ColorPalate;

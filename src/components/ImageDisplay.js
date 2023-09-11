import "./ImageDisplay.css";
import Warning from "../assets/warning.svg";
import React, { useRef, useState } from "react";

function ImageDisplay(props) {
  const [color, setColor] = useState("");

  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.click();
  };

  function color_change(e) {
    setColor(e.target.value);
  }

  return (
    <div>
      <div className="middle_main_screen">
        {props.image_only === false ? (
          <div className="inner_top_line">
            <p className="warningMsg">
              אל תשכח להוריד את הקבצים שלך. הם ימחקו אוטומטית כשתצא מהדף
              <img className="warningIcon" src={Warning} alt="warning"></img>
            </p>
            <div className="selectColorDiv">
              <button className="change_bg_color" onClick={focusInput}>
                <span
                  class="button-circle"
                  style={{ backgroundColor: color }}
                ></span>
                <span class="button-text">צבע רקע</span>
              </button>
              <input
                type="color"
                ref={inputElement}
                className="inputColor"
                onChange={color_change}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="inner_div_main"></div>;
    </div>
  );
}

export default ImageDisplay;

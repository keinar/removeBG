import "./DownloadImg.css";
import Check from "../assets/check.png";
import New from "../assets/new.png";
import React, { useState } from "react";
import close from "../assets/close.svg";

function DownloadImg(props) {
  const downloadPro = "HD הורד";
  const [openPopup, setopen_Popup] = useState(false);
  function open_popup() {
    setopen_Popup(true);
  }

  function close_popup() {
    setopen_Popup(false);
  }

  const popup_content = `האם להוריד את התמונה?`;

  return (
    <div className="TextDI">
      <section className="section1">
        <h2>{props.title}</h2>
        <p>{props.subTitle}</p>
        <button className="leftBtn" onClick={open_popup}>
          {props.btnText}
        </button>
        <p className="note">
          {props.note}
          <img src={Check} alt="check"></img>
        </p>
      </section>

      <hr></hr>

      <section className="section2">
        <h2 className="pro">
          Pro <img src={New} alt="new" className="newPro"></img>
        </h2>
        <p>1280X1920 תמונה מלאה</p>
        <button className="leftBtn">{downloadPro}</button>
        <p className="note">
          איכות טובה עד 25 מגה פיקסל<img src={Check} alt="check"></img>
        </p>
      </section>

      {openPopup ? (
        <div className="popup">
          <div className="popup_terms_overlay"></div>
          <div className="popup_cont">
            <h1>אישור להורדת התמונה</h1>
            <div className="popup_download_content">{popup_content}</div>

            <div>
              <label for="notRobot">אני לא רובוט</label>
              <input
                type="checkbox"
                id="notRobotCheckbox"
                name="notRobotCheckbox"
              />
            </div>

            <div className="confirm_popup">
              <button className="cancel_button" type="button">
                ביטול
              </button>
              <button className="ok_button" type="button">
                אישור
              </button>
            </div>

            <img
              src={close}
              alt="close"
              className="close_popup"
              onClick={close_popup}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DownloadImg;

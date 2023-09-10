import "./RemoveBG.css";
import close from "../assets/close.svg";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import DownloadImg from "./DownloadImg";
import React, { useRef, useState } from "react";
import Warning from "../assets/warning.svg";
import ImageDisplay from "./ImageDisplay";

function RemoveBG() {
  const [activeTab, setActiveTab] = useState("no_bg");

  const setActive = (tabName) => {
    setActiveTab(tabName);
  };

  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.click();
  };

  return (
    <div>
      <section className="bg_div_cont">
        <div className="bg_div_header">
          <img src={close} alt="close" className="close_img" />
          <div className="bg_div_header_title">
            {" "}
            העלאת תמונה כדי להסיר את הרקע{" "}
          </div>
          <button className="bg_div_header_button"> העלאת תמונה </button>
          <div className="bg_div_header_subtext">
            {" "}
            png, jpeg :פורמטים נתמכים
          </div>
        </div>

        <div className="main_cont">
          <div className="main_left">
            <div className="middle_div_left">
              <div className="top_tool_bar">
                <div
                  className={`tab_button_no_bg ${
                    activeTab === "no_bg" ? "active" : ""
                  }`}
                  onClick={() => setActive("no_bg")}
                >
                  הוסר רקע
                </div>
                <div
                  className={`tab_button_original ${
                    activeTab === "original" ? "active" : ""
                  }`}
                  onClick={() => setActive("original")}
                >
                  מקורי
                </div>
              </div>
              <div className="middle_main_screen">
                <div className="inner_top_line">
                  <p className="warningMsg">
                    אל תשכח להוריד את הקבצים שלך. הם ימחקו אוטומטית כשתצא מהדף
                    <img
                      className="warningIcon"
                      src={Warning}
                      alt="warning"
                    ></img>
                  </p>
                  <div className="selectColorDiv">
                    <button className="change_bg_color" onClick={focusInput}>
                      צבע רקע
                    </button>
                    <input
                      type="color"
                      ref={inputElement}
                      className="inputColor"
                    />
                  </div>
                </div>
              </div>
              <ImageDisplay />
            </div>
            <div className="main_left_footer">
              <div className="main_left_footer_text">
                על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות.
              </div>
              <button className="main_left_footer_btn"> תקנון חברה </button>
            </div>
          </div>

          <div className="main_right">
            <div className="middle_div_right">
              <DownloadImg
                title="תמונה חינם"
                subTitle="612X408 תצוגה מקדימה של תמונה"
                btnText="הורד"
                note="איכות טובה עד 0.25 מגה פיקסל"
              />
            </div>
          </div>
        </div>

        <footer className="footer_cont">
          <img src={logo} alt="logo" className="logo" />
          <a href="http://www.google.com" target="_blank" rel="noreferrer">
            {" "}
            <img src={banner} alt="banner" className="banner" />
          </a>
        </footer>
      </section>
    </div>
  );
}

export default RemoveBG;

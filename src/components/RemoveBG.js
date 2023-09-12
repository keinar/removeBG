import "./RemoveBG.css";
import close from "../assets/close.svg";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import DownloadImg from "./DownloadImg";
import React, { useState, useRef } from "react";
import ImageDisplay from "./ImageDisplay";
import Popup from "./popup";
import axios from "axios";

function RemoveBG() {
  const [activeTab, setActiveTab] = useState("no_bg");
  const [openPopup, setopen_Popup] = useState(false);
  const [showError, setShowEror] = useState(false);
  const [upload_image_name, setupload_image_name] = useState(false);
  const SUPPORTED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];
  const inputFileElement = useRef();

  const focusInput = () => {
    inputFileElement.current.click();
  };

  const setActive = (tabName) => {
    setActiveTab(tabName);
  };

  function open_popup() {
    setopen_Popup(true);
  }

  function close_popup() {
    setopen_Popup(false);
  }

  async function send_to_server_request(e) {
    setShowEror(false); // Clear any previous errors
    let file = e.target.files[0];
    if (SUPPORTED_FILE_TYPES.includes(file.type)) {
      let formData = new FormData();
      // let headers = { "Content-type": "multipart/form-data" };
      formData.append("UploadedFile", file);

      try {
        const res = await axios.post(
          "http://localhost:5000/upload_image",
          formData
        );
        setupload_image_name(res.data);
      } catch (error) {
        console.log("Error:", error);
        if (error.response) {
          // Handle specific error responses from the server
          console.log("Server responded with status:", error.response.status);
        } else if (error.request) {
          // Handle no response from server
          console.log("No response received:", error.request);
        } else {
          // Handle other errors
          console.log("Error:", error.message);
        }
        setShowEror(true);
      }
    } else {
      setShowEror(true);
    }
  }

  const termsContent = `ברוכים הבאים לאפליקציית הסרת רקע מתמונה ("האפליקציה"). השימוש
באפליקציה כפוף לתנאים וההגבלות המפורטות בתקנון זה. האפליקציה
מאפשרת הסרת רקע מתמונות. אין להשתמש בשירות למטרות הפוגעות בזולת.
אנו לא נושאים באחריות לתוצאות הנוצרות משימוש באפליקציה, כולל כל
נזק או אובדן מידע.`;

  return (
    <div>
      <section className="bg_div_cont">
        <div className="bg_div_header">
          <img src={close} alt="close" className="close_img" />
          <div className="bg_div_header_title">
            {" "}
            העלאת תמונה כדי להסיר את הרקע{" "}
          </div>
          <button className="bg_div_header_button" onClick={focusInput}>
            {" "}
            העלאת תמונה{" "}
          </button>
          <input
            type="file"
            className="upload_image_button"
            ref={inputFileElement}
            onChange={send_to_server_request}
          />
          <div className="bg_div_header_subtext">
            {" "}
            png, jpeg :פורמטים נתמכים
          </div>
          {showError ? <div className="errorMessage">קובץ לא נתמך</div> : ""}
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
              {activeTab === "no_bg" ? (
                <ImageDisplay
                  image_only={false}
                  upload_image_name={"no_bg_" + upload_image_name}
                />
              ) : (
                <ImageDisplay
                  image_only={true}
                  upload_image_name={upload_image_name}
                />
              )}
            </div>

            <div className="main_left_footer">
              <div className="main_left_footer_text">
                על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות.
              </div>
              <button className="main_left_footer_btn" onClick={open_popup}>
                {" "}
                תקנון חברה{" "}
              </button>
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

      {openPopup ? (
        <Popup
          openPopup={true}
          close_popup={close_popup}
          popup_content={termsContent}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default RemoveBG;

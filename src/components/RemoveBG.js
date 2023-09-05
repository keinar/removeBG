import './RemoveBG.css';
import close from '../assets/close.svg';
import logo from '../assets/logo.png';
import banner from '../assets/banner.png';
import DownloadImg from './DownloadImg';
import React, { useState } from 'react';
import Warning from '../assets/warning.svg';

function RemoveBG() {
  
  const [activeTab, setActiveTab] = useState(false); // State to track if the button is active
  // Function to toggle the button's active state
  const setActive = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <section className='bg_div_cont'>
        <div className='bg_div_header'>
          <img src={close} alt="close" className='close_img' />
          <div className="bg_div_header_title"> העלאת תמונה כדי להסיר את הרקע </div>
          <button className="bg_div_header_button"> העלאת תמונה </button>
          <div className="bg_div_header_subtext"> png, jpeg :פורמטים נתמכים</div>
        </div>

        <div className="main_cont">
          <div className="main_left">
            <div className="middle_div_left">
                <div className='top_tool_bar'>
                  <div
                    className={`tab_button_no_bg ${activeTab === 'no_bg' ? 'active' : ''}`}
                    onClick={() => setActive('no_bg')}
                  >
                    הוסר רקע
                  </div>
                  <div
                    className={`tab_button_original ${activeTab === 'original' ? 'active' : ''}`}
                    onClick={() => setActive('original')}
                  >
                    מקורי
                  </div>
                </div>
              <div className='middle_main_screen'>
                <div className='inner_top_line'>
                <p className='warningMsg'>אל תשכח להוריד את הקבצים שלך. הם ימחקו אוטומטית כשתצא מהדף<img className="warningIcon" src={Warning} alt='warning'></img></p>
                <button className='change_bg_color'>צבע רקע</button>
                </div>
                <div className='inner_div_main'></div>
              </div>
            </div>
            <div className="main_left_footer">
              <div className="main_left_footer_text"> על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות.</div>
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

        <div className="footer_cont">
          <img src={logo} alt="logo" className="logo" />
          <a href="http://www.google.com" target="_blank" rel="noreferrer"> <img src={banner} alt="banner" className="banner" /></a>
        </div>
      </section>
    </div>
  );
}

export default RemoveBG;

import "./DownloadImg.css";
import Check from "../assets/check.png";
import New from "../assets/new.png";

function DownloadImg(props) {
  const downloadPro = "HD הורד";

  return (
    <div className="TextDI">
      <section className="section1">
        <h2>{props.title}</h2>
        <p>{props.subTitle}</p>
        <button className="leftBtn">{props.btnText}</button>
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
    </div>
  );
}

export default DownloadImg;

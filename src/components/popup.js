import close from "../assets/close.svg";
import "./popup.css";

function popup(props) {
  const { close_popup, popup_content } = props;

  return (
    <>
      <div className="popup">
        <div className="popup_terms_overlay"></div>
        <div className="popup_terms">
          <div className="popup_content">{popup_content}</div>
          <img
            src={close}
            alt="close"
            className="close_popup"
            onClick={close_popup}
          />
        </div>
      </div>
    </>
  );
}

export default popup;

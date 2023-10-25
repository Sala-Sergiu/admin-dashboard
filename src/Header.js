import Icon from "@mdi/react";
import { mdiMagnify, mdiBellBadgeOutline } from "@mdi/js";
import minion from "./images/2.jpg";

export function Header() {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
}

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-top-left">
        <span className="search-icon">
          <Icon path={mdiMagnify} size={2} />
        </span>
        <input
          type="text"
          placeholder="What are you looking for"
          className="search-bar"
        />
      </div>
      <div className="header-top-right">
        <span className="icon-bell">
          <Icon path={mdiBellBadgeOutline} size={2} />
        </span>
        <div>
          <img src={minion} alt="little minion" className="image" />
        </div>
        <h3 className="heading3">Sergiu Sala</h3>
      </div>
    </div>
  );
}

function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="header-bottom-left">
        <div className="img-md">
          <img src={minion} alt="little minion" className="image-md" />
        </div>
        <div className="greet-person">
          <p className="greetings">Hi there,</p>
          <h2 className="heading2">Sergiu Sala (@sergiu)</h2>
        </div>
      </div>
      <div className="header-bottom-right">
        <button className="btn">New</button>
        <button className="btn">Upload</button>
        <button className="btn">Share</button>
      </div>
    </div>
  );
}

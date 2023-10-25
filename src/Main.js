import Icon from "@mdi/react";
import { mdiStarCheckOutline, mdiEyePlusOutline, mdiLink } from "@mdi/js";

const text = [
  {
    title: "Super cool projects",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliut, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Less cool projects",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliut, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Impossible App",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliut, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Easy Peasy App",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliut, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Ad Blocker",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliut, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Money Maker",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliut, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

export function Main() {
  return (
    <div className="main">
      {text.map((t, i) => (
        <Card key={i} title={t.title} text={t.text} />
      ))}
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="card">
      <div className="heading-text">
        <h3 className="heading3">{title}</h3>
        <p className="text">{text}</p>
      </div>
      <div className="card-icons">
        <div className="card-icon">
          <Icon path={mdiStarCheckOutline} size={1.5} />
        </div>
        <div className="card-icon">
          <Icon path={mdiEyePlusOutline} size={1.5} />
        </div>
        <div className="card-icon">
          <Icon path={mdiLink} size={1.5} />
        </div>
      </div>
    </div>
  );
}

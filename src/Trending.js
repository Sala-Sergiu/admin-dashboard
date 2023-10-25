import minion from "./images/2.jpg";

export function Trending() {
  return (
    <div className="trending">
      <div className="announcements">
        <div className="trending-block">
          <h4 className="heading4">Site Meintenance</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing eliut.
          </p>
        </div>
        <div className="trending-block">
          <h4 className="heading4">Site Meintenance</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing eliut
          </p>
        </div>
        <div className="trending-block">
          <h4 className="heading4">Site Meintenance</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing eliut
          </p>
        </div>
      </div>

      {/*  */}

      <div className="trending-list">
        <div className="trending-persons">
          <div>{<img src={minion} alt="minion" className="image" />}</div>
          <div>
            <div className="arond">@tegan</div>
            <div className="slogan">World Peace Builder</div>
          </div>
        </div>
        <div className="trending-persons">
          <div className="image">
            {<img src={minion} alt="minion" className="image" />}
          </div>
          <div>
            <div className="arond">@tegan</div>
            <div className="slogan">World Peace Builder</div>
          </div>
        </div>
        <div className="trending-persons">
          <div className="image">
            {<img src={minion} alt="minion" className="image" />}
          </div>
          <div>
            <div className="arond">@tegan</div>
            <div className="slogan">World Peace Builder</div>
          </div>
        </div>
        <div className="trending-persons">
          <div className="image">
            {<img src={minion} alt="minion" className="image" />}
          </div>
          <div>
            <div className="arond">@tegan</div>
            <div className="slogan">World Peace Builder</div>
          </div>
        </div>
      </div>
    </div>
  );
}

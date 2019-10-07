import * as React from "react";
import UserAcquisition from "./UserAcquisition";
import TotalLostRevenue from "./TotalLostRevenue";
import { RouteComponentProps } from "react-router-dom";
export default (props: RouteComponentProps) => {
  const m = {
    photo: "",
    name: "swain",
    id: "iamswain",
    index: 1,
    text: "screw you"
  };
  const diffDays = 29;
  const totalCost = 20;

  return (
    <>
      <div className="how-it-works">
        <div className="container">
          <div className="row">
            <div className="columns twelve">
              <h2>How it works</h2>
            </div>
          </div>
          <div className="row">
            <div className="columns four">
              <h5>Connect Facebook</h5>
              <div className="steps-img"></div>
              <p>We're only as strong as our newest member</p>
            </div>
            <div className="columns four">
              <h5>Stop using it</h5>
              <div className="steps-img"></div>
              <p>We're only as strong as our newest member</p>
            </div>
            <div className="columns four">
              <h5>Spread the word</h5>
              <div className="steps-img"></div>
              <p>We're only as strong as our newest member</p>
            </div>
          </div>
        </div>
      </div>
      <div className="log">
        <div className="container">
          <div className="row">
            <div className="columns three sidebar">
              <div className="sidebar-content">
                <div className="campaign-avatar">
                  <div className="facebook-logo"></div>
                </div>
                <TotalLostRevenue />
                <canvas id="myChart"></canvas>
                <UserAcquisition />
                <button onClick={() => props.history.push("/")}>
                  Leaderboard
                </button>
              </div>
            </div>
            <div id="profile" className="columns nine profile-container">
              <div className="profile-content">
                <div className="profile-header">
                  <div className="avatar">
                    <img src={m.photo} alt="img" style={{ width: "inherit" }} />
                  </div>
                  <section>
                    <h3>{m.name}</h3>
                    <a
                      href="https://facebook.com/{m.id}"
                      className="url-address"
                    >
                      https://facebook.com/{m.id}
                    </a>
                  </section>
                </div>
                <section className="user-stats">
                  <div>
                    <h3>#{m.index + 1}</h3>
                    <span>User Number</span>
                  </div>
                  <div>
                    <h3>{diffDays}</h3>
                    <span>Days Boycotting</span>
                  </div>
                  <div>
                    <h3>${totalCost}</h3>
                    <span>Boycott Value</span>
                  </div>
                </section>
                <p>I am boycotting Facebook until {m.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import * as React from "react";
import UserAcquisition from "./UserAcquisition";
import TotalLostRevenue from "./TotalLostRevenue";
import { RouteComponentProps } from "react-router-dom";
import Near from "../near/Near";
const MS_IN_ONE_DAY = 24 * 60 * 60 * 1000;
const MS_IN_ONE_WEEK = 7 * 24 * 60 * 60 * 1000;
const MS_IN_30_DAYS = 30 * 24 * 60 * 60 * 1000;
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
  const [stat, setStat] = React.useState({
    last1day: 0,
    last7day: 0,
    last30day: 0,
    totalUser: 0,
    totalSec: 0
  });
  React.useEffect(() => {
    getRangeMessages();
  }, []);
  async function getRangeMessages() {
    const messages = await Near.methods.getRangeMessages({ start: 0 });
    const totalUser = messages.length;
    const totalSec = messages.reduce((acc, cur) => {
      const logDate = new Date(cur.date);
      const nowDate = new Date();
      const diffTime = Math.abs(nowDate.getTime() - logDate.getTime());
      const diffSecond = Math.ceil(diffTime / 1000);
      return acc + diffSecond;
    }, 0);
    const timeNow = new Date().getTime();

    const last1day = messages.filter(
      m => timeNow - new Date(m.date).getTime() <= MS_IN_ONE_DAY
    ).length;
    const last7day = messages.filter(
      m => timeNow - new Date(m.date).getTime() <= MS_IN_ONE_WEEK
    ).length;
    const last30day = messages.filter(
      m => timeNow - new Date(m.date).getTime() <= MS_IN_30_DAYS
    ).length;
    setStat({ last1day, last7day, last30day, totalUser, totalSec });
  }

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
                <TotalLostRevenue
                  totalUser={stat.totalUser}
                  totalSec={stat.totalSec}
                />
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

import * as React from "react";
import TotalLostRevenue from "./TotalLostRevenue";
import UserAcquisition from "./UserAcquisition";
import { RouteComponentProps } from "react-router-dom";
import Near from "../near/Near";
const MS_IN_ONE_DAY = 24 * 60 * 60 * 1000;
const MS_IN_ONE_WEEK = 7 * 24 * 60 * 60 * 1000;
const MS_IN_30_DAYS = 30 * 24 * 60 * 60 * 1000;

export default ({ history }: RouteComponentProps) => {
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
    const methods = await Near.promise;
    const messages = await methods.getRangeMessages({ start: 0 });
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
  function toMain() {
    history.push("join");
  }
  return (
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
              <button onClick={toMain} id="joinBtn">
                Join Boycott
              </button>
            </div>
          </div>
          <div className="columns nine ledger">
            <table className="u-full-width">
              <tbody id="near-tbody">
                <tr>
                  <td>
                    <div className="avatar">
                      <div className="avatar-placeholder"></div>
                    </div>
                  </td>
                  <td>
                    <span>
                      <label className="user-num">#20324234</label>Dwayne
                      Johnson is boycotting Facebook until he gets paid his fair
                      share.
                    </span>
                  </td>
                  <td>
                    <span className="u-pull-right">
                      <label className="user-num">13</label>Days
                    </span>
                  </td>
                  <td>
                    <span className="u-pull-right">
                      <label className="user-sum">$4.35</label>Boycott Value
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

import * as React from "react";
import TotalLostRevenue from "./TotalLostRevenue";
import UserAcquisition from "./UserAcquisition";
import { RouteComponentProps } from "react-router-dom";
export default ({ history }: RouteComponentProps) => {
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
              <TotalLostRevenue />
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

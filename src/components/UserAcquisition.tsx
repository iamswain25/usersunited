import * as React from "react";
export default () => {
  return (
    <>
      <section>
        <span>
          <aside>LAST</aside>24 HOURS
        </span>
        <span className="total-boycott-sum" id="last24hours">
          23
        </span>
      </section>
      <section>
        <span>
          <aside>LAST</aside>7 DAYS
        </span>
        <span className="total-boycott-sum" id="last7days">
          23
        </span>
      </section>
      <section>
        <span>
          <aside>LAST</aside>30 DAYS
        </span>
        <span className="total-boycott-sum" id="last30days">
          23
        </span>
      </section>
    </>
  );
};

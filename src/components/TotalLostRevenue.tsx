import * as React from "react";
import useInterval from "use-interval";
const EARNING_PER_SECOND = 0.068 / 24 / 60 / 60;
const ROUNDING = 1000000;

export default (props: { totalUser: number; totalSec: number }) => {
  const [sum, setSum] = React.useState(0);
  const [second, setSecond] = React.useState(props.totalSec);
  useInterval(() => {
    setSecond(second + props.totalUser);
    const totalSum =
      Math.round(
        (second + 1 + props.totalSec) * EARNING_PER_SECOND * ROUNDING
      ) / ROUNDING;
    setSum(totalSum);
  }, 1000);
  return (
    <p>
      We are <strong className="total-boycott-sum">{props.totalUser}</strong>{" "}
      Users United boycotting Facebook resulting in
      <strong className="total-boycott-sum" id="earning-total">
        {` $${sum} `}
      </strong>
      lost revenue.
    </p>
  );
};

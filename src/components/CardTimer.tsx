import React from "react";
import { Line } from "rc-progress";

import "../styles/card-timer.scss";

const NUM_SECONDS = 3;
const MS_IN_SEC = 1000;
const TOTAL_PERCENT = 100;

interface Props {
  percent: number;
  handleCountDown: (currPercent: number) => void;
  handleResetTimer: () => void;
}
interface State {
  timer: NodeJS.Timeout;
}

export default class CardTimer extends React.Component<Props, State> {
  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.props.handleCountDown(this.props.percent);
      }, NUM_SECONDS * (MS_IN_SEC / TOTAL_PERCENT))
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);

    this.props.handleResetTimer();
  }

  render() {
    const numSeconds = Math.ceil(this.props.percent / (TOTAL_PERCENT / NUM_SECONDS));
    return (
      <div className="card-timer">
        <span className="num-sec-left">
          {numSeconds} {numSeconds === 1 ? "second" : "seconds"} left!
        </span>
        <Line className="num-sec-progress" percent={this.props.percent} strokeWidth={1} strokeColor="green" />
      </div>
    );
  }
}

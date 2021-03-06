import React from "react";
import { Line } from "rc-progress";

import "../styles/card-timer.scss";

const NORMAL_NUM_SECONDS = 3;
const SPECIAL_NUM_SECONDS = 6;
let numSeconds = NORMAL_NUM_SECONDS;
const MS_IN_SEC = 1000;
const TOTAL_PERCENT = 100;

interface Props {
  percent: number;
  specialTimerCount: number;
  handleCountDown: (currPercent: number) => void;
  handleResetTimer: () => void;
}
interface State {
  timer: NodeJS.Timeout;
}

class CardTimer extends React.Component<Props, State> {
  componentDidMount() {
    if (this.props.specialTimerCount > 0) {
      numSeconds = SPECIAL_NUM_SECONDS;
    } else {
      numSeconds = NORMAL_NUM_SECONDS;
    }

    this.setState({
      timer: setInterval(() => {
        this.props.handleCountDown(this.props.percent);
      }, numSeconds * (MS_IN_SEC / TOTAL_PERCENT))
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);

    this.props.handleResetTimer();
  }

  render() {
    const numSecondsLeft = Math.ceil(this.props.percent / (TOTAL_PERCENT / numSeconds));
    return (
      <div className="card-timer">
        <span className="num-sec-left">
          {numSecondsLeft} {numSecondsLeft === 1 ? "second" : "seconds"} left!
        </span>
        <Line className="num-sec-progress" percent={this.props.percent} strokeWidth={1} strokeColor="green" />
      </div>
    );
  }
}

export default CardTimer;

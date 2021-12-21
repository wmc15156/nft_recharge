import ReactCountDown, { zeroPad } from 'react-countdown';
import React from 'react';
import moment from 'moment';

const CountDown = () => {
  const CompletedTime = () => <span>D-DAY</span>;

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Render a completed state
      return <CompletedTime />;
    } else {
      // Render a countdown
      return (
        <div>
          <span className="emo">⚡</span>
          <span className="time">
            <em className="day">{zeroPad(days)}</em>d : <em className="hour">{zeroPad(hours)}</em>h
            : <em className="minute">{zeroPad(minutes)}</em>m :{' '}
            <em className="second">{zeroPad(seconds)}</em>s
          </span>
        </div>
      );
    }
  };

  return (
    <ReactCountDown date={moment().valueOf() + 864000000} renderer={renderer}>
      <div>D-DAY</div>
    </ReactCountDown>
  );
};

export default CountDown;

import ReactCountDown from 'react-countdown';
import React, { useEffect } from 'react';
import moment from 'moment';

const CountDown = () => {
  const now = moment();
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
            <em className="day">{days}</em>d :<em className="hour">{hours}</em>h :
            <em className="minute">{minutes}</em>m :<em className="second">{seconds}</em>s
          </span>
        </div>
      );
    }
  };

  console.log(moment().unix(), Date.now(), moment().valueOf());

  useEffect(() => {
    console.log(moment().unix(), Date.now());
  }, [Date.now()]);

  return (
    <ReactCountDown date={moment().valueOf() + 10000} renderer={renderer}>
      <div>D-DAY</div>
    </ReactCountDown>
  );
};

export default CountDown;

import ReactCountDown, { zeroPad } from 'react-countdown';
import React, { useEffect } from 'react';
import moment from 'moment';
import { useRecoilState } from 'recoil';
import { TimeZoneAtom } from '../../../store/atoms';
import momentTimeZone from 'moment-timezone';

const CountDown = () => {
  const dDay = '2021-12-31 12:12:12';

  const CompletedTime = () => <span>D-DAY</span>;
  const [timeZoneAtom, setTimeZoneAtom] = useRecoilState(TimeZoneAtom);
  const gmt = moment().utc();
  const krTime = momentTimeZone(dDay).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');

  const localTime = moment(dDay).format('YYYY-MM-DD HH:mm:ss');
  const differ = moment(krTime).valueOf() - moment(localTime).valueOf();

  useEffect(() => {
    const date = moment().valueOf() + 864000000;
    setTimeZoneAtom(date);
  }, []);

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
    <>
      <ReactCountDown date={moment(localTime).valueOf() - differ} renderer={renderer}>
        <div />
      </ReactCountDown>
    </>
  );
};

export default CountDown;

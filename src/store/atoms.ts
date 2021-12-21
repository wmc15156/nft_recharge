import { atom } from 'recoil';

export const TimeZoneAtom = atom<{ gmt: string; region: string }>({
  key: 'timeZone',
  default: {
    gmt: '',
    region: '',
  },
});

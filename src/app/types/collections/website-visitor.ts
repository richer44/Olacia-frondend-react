export interface LiveVisitorData {
  id: string | number;
  location: JSX.Element;
  referer: string;
  browser: string;
  ip: string;
  time: string;
  ping: JSX.Element;
  action: JSX.Element;
}
export interface OnlineVisitorData {
  id: string | number;
  location: JSX.Element;
  referer: string;
  browser: string;
  ip: string;
  firstVisit: string;
  time: string;
  action: JSX.Element;
}

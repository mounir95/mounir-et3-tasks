import {observable, action, makeObservable} from 'mobx';

class FilterStore {
  platform: Boolean = true;
  se: Boolean = true;
  status: Boolean = true;
  comment: Boolean = true;
  date: Date = new Date(Date.now());
  constructor() {
    makeObservable(this, {
      platform: observable,
      se: observable,
      status: observable,
      comment: observable,
      changefilter: action,
    });
  }
  changefilter = (pl: Boolean, se: Boolean, st: Boolean, cm: Boolean) => {
    this.platform = pl;
    this.se = se;
    this.status = st;
    this.comment = cm;
  };
}
export const filterMobx = new FilterStore();
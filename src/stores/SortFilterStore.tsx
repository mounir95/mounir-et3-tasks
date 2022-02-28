import {observable, action, makeObservable} from 'mobx';

class SortFilterStore {
  date: Boolean = true;
  id: Boolean = true;
  constructor() {
    makeObservable(this, {
      date: observable,
      id: observable,
      setDateFun: action,
    });
  }
  setDateFun = () => {
    this.date = !this.date;
    this.id = !this.id;
  };
}
export const sortFilterMobx = new SortFilterStore();
import {observable, action, makeObservable} from 'mobx';

class ExcelStore {
  id: number = -1;
  filterfalse: Boolean = false;
  updatefalse: Boolean = false;
  constructor() {
    makeObservable(this, {
      id: observable,
      filterfalse: observable,
      updatefalse: observable,
      resetStore: action,
      filterResetStore: action,
      onUpdateFun: action,
      filterPressFun: action,
    });
  }
  resetStore = () => {
    this.id = 0;
    this.updatefalse = false;
    this.filterfalse = false;
  };
  filterResetStore = () => {
    this.id = 0;
    this.updatefalse = false;
  };
  onUpdateFun = (objid: number) => {
    this.id = objid;
    this.updatefalse = !this.updatefalse;
    this.filterfalse = false;
  };
  filterPressFun = () => {
    this.id = 0;
    this.updatefalse = false;
    this.filterfalse = !this.filterfalse;
  };
}
export const excelMobx = new ExcelStore();